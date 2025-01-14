<!-- @format -->

# CaliRP Helper App

A comprehensive help and guidance application for the California Roleplay FiveM server, integrated with the lb-phone framework.

This is specifically made for CaliRP but can easily be forked and changed.

## Description

This resource adds a custom app to the lb-phone that provides new players with essential information about:

- Server rules and terminology
- Common keybinds and commands
- Voice chat setup
- Character creation
- Vehicle management
- Menu navigation

## Features

- Dark/Light theme support
- Intuitive navigation
- Comprehensive guides for:
  - Character customization
  - Vehicle spawning and customization
  - Chat commands
  - Voice chat setup
  - Server terminology
  - Common keybinds
  - Menu systems (F1, F3, F6, M menu)

## Installation

1. Download the resource
2. Place it in your FiveM resources folder
3. Add `ensure cali_helper_app` to your server.cfg
4. Ensure the `lb-phone` resource is running

## Dependencies

- lb-phone

## Configuration

The app is configured in the client.lua file with the following default settings:

```lua
{
identifier = "cali_helper_app",
name = "Get Started",
description = "California Roleplay's Help and Guidance",
developer = "GoatedDevelopment",
defaultApp = true,
size = 521
}
```

## File Structure

```bash
cali_helper_app/
├── client.lua
├── fxmanifest.lua
└── ui/
├── assets/
├── .html
├── .js
├── styles.css
└── colors.css
```

## Credits

- Developer: GoatedDevelopment
- Framework: lb-phone

## License

This project uses auto line-ending normalization as specified in the .gitattributes file.

## Support

For support with this resource, please contact the California Roleplay server administration team.
