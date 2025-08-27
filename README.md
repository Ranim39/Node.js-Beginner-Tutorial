# Node.js Beginner Tutorial

Learn Node.js from scratch with hands-on examples. Perfect for beginners!

## 🚀 Quick Start

1. **Install Node.js** from [nodejs.org](https://nodejs.org/)
2. **Clone and setup:**
```bash
git clone https://github.com/yourusername/nodejs-beginner-tutorial.git
cd nodejs-beginner-tutorial
npm install
```

3. **Create content folder:**
```
content/
├── first.txt (add some text)
└── second.txt (add some text)
```

## 📚 What You'll Learn

- Basic Node.js concepts
- Modules and file system
- Building HTTP servers
- Working with npm packages
- Streams and performance

## 📖 Tutorial Order

Follow these files in order:

### 1. Basics
- `1-globals.js` - Node.js basics and global objects

### 2. Modules 
- `2-modules.js` - Creating and exporting modules
- `3-utils.js` - Utility functions module
- `4-alternative-syntax.js` - Different export styles
- `5-mind-grenade.js` - How modules execute
- `6-modules.js` - Using multiple modules

### 3. Built-in Modules
- `7-os-module.js` - Operating system info
- `8-path-module.js` - File paths

### 4. File System
- `9-fs-sync.js` - Reading/writing files (blocking)
- `10-fs-async.js` - Reading/writing files (non-blocking)

### 5. HTTP Server
- `11-http.js` - Basic web server

### 6. External Packages
- `12-lodash.js` - Using npm packages

### 7. Advanced
- `app.js` - Streams and performance

## 🎯 How to Run

Run each file with:
```bash
node filename.js
```

For servers (`11-http.js` and `app.js`):
```bash
node filename.js
# Then visit http://localhost:5000
```

## 📁 Folder Structure
```
Nodejs-beginner-tutorial/
├── basics/1-globals.js
├── modules/2-modules.js, 3-utils.js, etc.
├── built-ins/7-os-module.js, 8-path-module.js
├── file-system/9-fs-sync.js, 10-fs-async.js
├── server/11-http.js
├── packages/12-lodash.js
├── advanced/app.js
├── content/first.txt, second.txt
└── package.json
```

## 💡 Key Tips

- Start with `1-globals.js` and follow the order
- Each example builds on the previous ones
- Use `Ctrl+C` to stop running servers
- Read the comments in each file for explanations

## 🔧 Common Issues

- **Port in use?** Kill the process or change the port
- **Module not found?** Run `npm install`
- **File errors?** Make sure `content/` folder exists with text files

## 🎉 That's it!

Start with `1-globals.js` and work your way through. Happy coding! 🚀
