# Dev Ruleset

The `dev-ruleset` repository is a centralized resource for personal development standards, configuration guidelines, and documentation. It provides a unified way to manage development rules and reusable assets across projects.

---

## Features

- **AI Tool Configuration**: Includes custom instruction sets for tools like [Cursor](https://www.cursor.so/) and [GitHub Copilot](https://github.com/features/copilot).
- **Node Modules for Documentation**: Curated dependencies to reference internal libraries for documentation purposes.
- **Reusable Design System**: A library of shared components and styles to ensure consistency.
- **Symbolic Linking**: Seamlessly link files to multiple projects, making updates instant across all linked repositories.
- **Exclusion from Source Control**: Prevent symbolic links and configuration files from appearing in Git or VS Code views without modifying `.gitignore`.

---

## Repository Structure

```plaintext
dev-ruleset/
├── cursor/
│   └── .cursorrules           # Custom rules for Cursor AI
├── copilot/
│   └── copilot-instructions.md # Guidelines for GitHub Copilot
├── design-system/
│   ├── components/            # Reusable design components
│   └── styles/                # Common styles and themes
├── node-modules-docs/         # Documented dependencies for reference
└── README.md                  # Documentation for the repository
```

---

## Linking Instructions

To integrate files from the `dev-ruleset` repository into your projects, symbolic links are used. **Note**: Administrator access is required on Windows systems to create symbolic links.

### **For Cursor**

1. Navigate to your project root directory:

   ```powershell
   cd "C:\path\to\your\project"
   ```

2. Create the symbolic link for `.cursorrules`:

   ```powershell
   New-Item -ItemType SymbolicLink -Path ".\.cursorrules" -Target "C:\path\to\dev-ruleset\cursor\.cursorrules"
   ```

   ```powershell
   New-Item -ItemType SymbolicLink -Path ".\.github\resources" -Target "C:\path\to\dev-ruleset\shared"
   ```

3. Verify the link:

   ```powershell
   ls .
   ```

   Output:

   ```plaintext
   .cursorrules -> C:\path\to\dev-ruleset\cursor\.cursorrules
   ```

---

### **For GitHub Copilot**

1. Navigate to your project root directory:

   ```powershell
   cd "C:\path\to\your\project"
   ```

2. Create the symbolic link for `copilot-instructions.md`:

   ```powershell
   New-Item -ItemType SymbolicLink -Path ".\.github\copilot-instructions.md" -Target "C:\path\to\dev-ruleset\copilot\copilot-instructions.md"
   ```

3. Verify the link:

   ```powershell
   ls .github
   ```

   Output:

   ```plaintext
   copilot-instructions.md -> C:\path\to\dev-ruleset\copilot\copilot-instructions.md
   ```

---

## Excluding Files from Source Control

To prevent symbolic links or configuration files from appearing in **Git Source Control**:

### **Use Git’s Local Exclude File**

1. Open the `.git/info/exclude` file in your project:

   ```bash
   nano .git/info/exclude
   ```

2. Add the following lines:

   ```plaintext
   .cursorrules
   .github/copilot-instructions.md
   ```

3. Save and exit.

4. Verify the exclusion:

   ```bash
   git status
   ```

   These files should no longer appear in the list of tracked or modified files.

---

### **Hiding Files in VS Code**

To hide these files in VS Code:

1. Open `settings.json` in VS Code:

   - Press `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (macOS).
   - Click the `{}` icon in the top-right corner.

2. Add the following configuration to settings:

   ```json
   "github.copilot.chat.commitMessageGeneration.instructions": [
        {
            "file": ".github/instructions/commit-message.instruction.md"
        }
    ],
    "github.copilot.chat.codeGeneration.instructions": [
        {
            "file": ".github/instructions/code-generation.instruction.md"
        }
    ],
    "github.copilot.chat.testGeneration.instructions": [
        {
            "file": ".github/instructions/test-generation.instruction.md"
        }
    ],
    "github.copilot.chat.reviewSelection.instructions": [
        {
            "file": ".github/instructions/review-selection.instruction.md"
        }
    ]
   ```


   This will:

   - Prevent VS Code from watching for changes in these files.
   - Hide them from the Explorer view.

---

## Maintenance

1. **Administrator Access**: Always run PowerShell as Administrator when creating symbolic links.
2. **Updates**: Updates to `dev-ruleset` are automatically reflected in linked projects.
3. **Local Changes**: Use `info/exclude` for local file exclusions without modifying `.gitignore`.
