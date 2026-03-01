# Portfolio Content Management Guide

This portfolio uses a centralized content configuration system located in `lib/content.ts`. You can easily update all portfolio content from a single file without touching the UI components.

## How to Update Content

### Personal Information
Edit the `personal` section in `lib/content.ts`:

```typescript
personal: {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  phone: "Your Phone Number",
  location: "Your Location",
  description: "Your detailed description",
  summary: "Brief summary for hero section",
  stats: [
    { value: "2.5+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "5+", label: "AI Systems" },
  ]
}
```

### Social Links
Update your social media links in the `social` section:

```typescript
social: [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "Linkedin" },
  { name: "Email", url: "mailto:your@email.com", icon: "Mail" },
]
```

### Tech Stack
Modify the technologies you want to showcase:

```typescript
techStack: [
  { name: "Technology Name", color: "#hexcolor" },
  // Add or remove technologies as needed
],
```

### Skills
Update your skills in the categories:

```typescript
skills: {
  categories: [
    {
      title: "Category Name",
      skills: [
        { name: "Skill Name", level: 90 }, // Level 0-100
      ],
      color: "#hexcolor", // Color for this category
    },
  ],
  additional: [
    { name: "Additional Tech", category: "Category" },
  ],
},
```

### Projects
Manage your project showcase:

```typescript
projects: [
  {
    id: 1,
    title: "Project Title",
    description: "Detailed project description",
    category: ["ai", "fullstack"], // Options: ai, fullstack, saas
    tech: ["Tech1", "Tech2", "Tech3"],
    icon: "Bot", // Options: Bot, Sparkles, Layers, Code2
    color: "#hexcolor",
    featured: true, // Show as featured project
  },
],
```

### Experience
Update your work history:

```typescript
experience: [
  {
    id: 1,
    company: "Company Name",
    role: "Job Title",
    period: "Start Date - End Date",
    location: "Location",
    description: "Role description",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    type: "work", // Options: work, internship, freelance
  },
],
```

### Contact Information
Update your contact details:

```typescript
contact: [
  { icon: "Mail", label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { icon: "Phone", label: "Phone", value: "Your Phone", href: "tel:yourphone" },
  { icon: "MapPin", label: "Location", value: "Your Location", href: null },
],
```

## Available Icons

For projects and social links, you can use these icons:
- `Bot` - For AI/Machine Learning projects
- `Sparkles` - For special features
- `Layers` - For infrastructure/systems
- `Code2` - For general development
- `Github`, `Linkedin`, `Mail`, `Phone`, `MapPin` - For contact/social links

## Adding New Content

1. Open `lib/content.ts`
2. Locate the section you want to modify
3. Update the content as needed
4. Save the file
5. The changes will automatically appear in the portfolio

## Preview Changes

After making changes to the content file, restart your development server to see the updates:

```bash
npm run dev
```

## Benefits of Centralized Content

- **Single Source of Truth**: All content in one place
- **Easy Updates**: Change content without touching UI code
- **Consistency**: Same information across all sections
- **Maintainability**: Clean separation of content and presentation
- **Scalability**: Easy to add new sections or modify existing ones