# Assets Directory

This folder contains all static assets used throughout the application.

## Folder Structure

```
src/assets/
├── images/          # General images (profile pictures, banners, etc.)
└── logos/           # Company logos and branding assets
```

## Usage

### Company Logo

Place your company logo files in `src/assets/logos/` (e.g., `hsi-logo.svg`, `hsi-logo.png`).

**Example: Import and use in Sidebar component:**

```tsx
// In src/ui/Sidebar.tsx
import hsiLogo from '../assets/logos/hsi-logo.svg'

// Then use it:
<img src={hsiLogo} alt="HSI Logo" className="brand-icon" />
```

### General Images

Place other images (profile pictures, icons, banners) in `src/assets/images/`.

**Example:**
```tsx
import profilePic from '../assets/images/default-avatar.png'
```

## Supported Formats

- **Images:** `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`
- **Icons:** `.svg` (recommended for logos)

## Notes

- Vite will automatically optimize and bundle these assets
- Use relative imports from the component file
- For assets that need to be served at root URL, use `public/` folder instead
