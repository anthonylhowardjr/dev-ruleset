
## Code Reviews

- **Purpose of Code Reviews:**

  - **Improve Codebase Health:** Ensure each code change enhances the overall health and quality of the codebase.
  - **Balance Quality and Progress:** Maintain a balance between enforcing code quality and allowing developers to make timely progress.

- **Key Review Aspects:**

  - **Design:** Assess the soundness of the code's design and its integration with the existing system.
  - **Functionality:** Verify that the code behaves as intended and meets user requirements.
  - **Complexity:** Ensure the code remains as simple as possible, avoiding unnecessary complexity.
  - **Tests:** Confirm that the code is adequately tested with reliable and meaningful tests.
  - **Naming:** Check that all names are descriptive, clear, and adhere to the project's naming conventions.
  - **Comments:** Ensure comments are clear, necessary, and provide valuable insights without cluttering the code.
  - **Style:** Verify that the code adheres to the project's style guidelines for consistency and readability.

- **Review Speed:**

  - **Timely Feedback:** Provide prompt reviews to maintain team productivity and momentum.
  - **Impact on Quality:** Recognize that swift reviews contribute to higher code quality and enhance developer satisfaction.

- **Providing Feedback:**

  - **Focus on the Code:** Address the code itself rather than the individual who wrote it.
  - **Constructive Suggestions:** Offer specific, actionable suggestions for improvement.
    - _Example:_ Instead of saying "This function is bad," say "Consider breaking this function into smaller, more focused functions to enhance readability."
  - **Respectful Tone:** Maintain a respectful and collaborative tone to foster a positive review environment.

- **Handling Disagreements:**

  - **Open Discussions:** Be open to discussions and consider the developer's perspective during disagreements.
  - **Advocate for Improvements:** Support changes that enhance code health with clear and logical explanations.
  - **Seek Consensus:** Aim for consensus, understanding that improving code health is a gradual and collaborative process.

- **Types of Changes:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring without adding features or fixing bugs
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks (e.g., dependencies, build scripts)

- **Guidelines:**
- **Subject Line:**

  - Combine type, scope, and a brief description.
  - Use imperative mood (e.g., "Add" not "Added").
  - Limit to 50 characters.
  - Capitalize the first letter.
  - No period at the end.
  - **Example:** `feat(auth): add JWT authentication`

- **Body (Optional):**

  - Separate from the subject with a blank line.
  - Explain the "what" and "why" of changes, not the "how."
  - Wrap at 72 characters.
  - Use informal yet technical language.
  - Include context and background information.
  - **Example:**

    ```
    Added JWT authentication to enhance security for user sessions.

    This allows users to authenticate using JSON Web Tokens, providing a more secure and scalable solution compared to traditional session-based authentication.
    ```

- **Breaking Changes (If applicable):**

  - Start this section with "BREAKING CHANGE:"
  - Explain the breaking change, its impact, and migration steps.
  - **Example:**
    ```
    BREAKING CHANGE: Removed support for OAuth1. Users must migrate to OAuth2.
    ```

- **Footer (Optional):**
  - Reference related issues or pull requests.
  - Use keywords like "Fixes", "Closes", or "Relates to."
  - **Example:** `Fixes #123` or `Closes PR #456`
