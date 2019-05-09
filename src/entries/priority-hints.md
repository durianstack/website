---
path: "/entries/priority-hints"
date: "2019-22-01"
title: "Twitter Tip #2"
type: "tip"
thumbnail: "https://pbs.twimg.com/media/Dxf704JXcAAftg3?format=jpg&name=medium"
url: "https://twitter.com/addyosmani/status/1087614725809160192?s=20"
---
Priority Hints: hint the `importance` of a resource to prioritize downloading it sooner/later:

```html
<img importance=low>
<img importance=high>
<img importance=auto> (default)
```

Works on <img>, <link> and fetch()

📗Spec: https://wicg.github.io/priority-hints/

🏃‍Origin Trial: https://bit.ly/hints-experiment