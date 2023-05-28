# colinnywles.github.io
Photography page: https://colinnywles.github.io/

## Remove full history

### Step 1: remove all history (Make sure you have backup, this cannot be reverted)
```
cat .git/config  # note origin url
rm -rf .git
```

### Step 2: reconstruct the Git repo with only the current content
```
git init
git add .
git commit -m "Initial commit"
```
### Step 3: push to GitHub.
```
git remote add origin https://github.com/ColinNywles/colinnywles.github.io.git
git push -u --force origin master
```
