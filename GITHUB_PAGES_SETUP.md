# Fix 404 — GitHub Pages not enabled yet

The **Actions workflow is working**. Your built site is on the `gh-pages` branch.

The live URL still 404s because **GitHub Pages hosting is turned OFF** for this repo (`has_pages: false`).

Deploy success ≠ site is live. You must enable Pages once in Settings.

---

## Fix (2 minutes) — log in as `samSecurity04`

### Step 1 — Open Pages settings

https://github.com/samSecurity04/samruddhi-cyber-portfolio/settings/pages

(You must be signed in as **samSecurity04**, not vinitshetty16.)

### Step 2 — Configure source

Under **Build and deployment**:

| Setting | Value |
|---------|--------|
| **Source** | **Deploy from a branch** |
| **Branch** | **gh-pages** |
| **Folder** | **/ (root)** |

Click **Save**.

### Step 3 — Wait

- GitHub shows: *“Your site is live at https://samsecurity04.github.io/samruddhi-cyber-portfolio/”*
- First publish can take **2–10 minutes**

### Step 4 — Open the site

https://samSecurity04.github.io/samruddhi-cyber-portfolio/

---

## Common mistakes (cause 404)

| Wrong | Right |
|-------|--------|
| Source = **GitHub Actions** | Source = **Deploy from a branch** |
| Branch = **main** | Branch = **gh-pages** |
| Folder = **/docs** | Folder = **/** (root) |
| Not signed in as **samSecurity04** | Use Samruddhi’s account |

---

## Still 404?

1. **Verify email** on the samSecurity04 GitHub account (Settings → Emails)
2. On Pages settings, confirm the green live URL banner appears
3. Check the `gh-pages` branch exists: https://github.com/samSecurity04/samruddhi-cyber-portfolio/tree/gh-pages
4. Re-run deploy: Actions → **Deploy to GitHub Pages** → **Run workflow**

---

## How to confirm it’s fixed

After saving Pages settings, this API should stop returning 404 (for maintainers):

`https://api.github.com/repos/samSecurity04/samruddhi-cyber-portfolio/pages`

Until then, the website link will stay 404 no matter how many deploys succeed.
