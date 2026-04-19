import re

with open("resume_ats.html", "r") as f:
    html = f.read()

# 1. Update metric for CoastScan
html = html.replace('achieving &gt;93% accuracy on real-world geospatial datasets', 'achieving 98 percent accuracy matched with labtested sand')

# 2. Add Oracle certification
html = html.replace('<li>Innovation, Design and Entrepreneurship', '<li>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</li>\n        <li>Innovation, Design and Entrepreneurship')

# 3. Replace summary
old_summary = re.search(r'<p class="summary-text">.*?</p>', html, re.DOTALL).group(0)
new_summary = '''<p class="summary-text">
        B.Tech Computer Science student specializing in AI/ML, Distributed Systems, and Blockchain. 
        Built production-grade systems including low-latency AI pipelines, ZKML-based decentralized applications, and real-time anomaly detection engines. 
        Founder of a Web3 startup and multi-time national hackathon winner. 
        Strong in Data Structures, System Design, and scalable backend architectures.
    </p>'''
html = html.replace(old_summary, new_summary)

# 4. Project Order
project_blocks = re.findall(r'<div class="project">.*?</div>', html, re.DOTALL)
# 0: CoastScan, 1: VeriCred, 2: L3M, 3: GeoAnushasan, 4: Fraud Detection, 5: IoT Security, 6: UrjaSetu
ordered_projects = [
    project_blocks[1], 
    project_blocks[2], 
    project_blocks[4], 
    project_blocks[0], 
    project_blocks[3], 
    project_blocks[5], 
    project_blocks[6]
]
first_project_idx = html.find(project_blocks[0])
last_project_end = html.find(project_blocks[-1]) + len(project_blocks[-1])
html = html[:first_project_idx] + '\n\n    '.join(ordered_projects) + html[last_project_end:]

# 5. Fix dashes
html = html.replace('—', '-')
html = html.replace('·', ',')

with open("resume_ats.html", "w") as f:
    f.write(html)
