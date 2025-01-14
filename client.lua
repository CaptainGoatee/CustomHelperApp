local identifier = "cali_helper_app"

while GetResourceState("lb-phone") ~= "started" do
    Wait(500)
end

local function addApp()
    local added, errorMessage = exports["lb-phone"]:AddCustomApp({
        identifier = identifier, -- unique app identifier

        name = "Get Started",
        description = "California Roleplay's Help and Guidance",
        developer = "GoatedDevelopment",

        defaultApp = true,
        size = 521,

        images = { 
            "https://cfx-nui-" .. GetCurrentResourceName() .. "/ui/assets/screenshot-light.png",
            "https://cfx-nui-" .. GetCurrentResourceName() .. "/ui/assets/screenshot-dark.png"
        },

        -- ui = "http://localhost:5500/" .. GetCurrentResourceName() .. "/ui/index.html",
        ui = GetCurrentResourceName() .. "/ui/index.html",

        icon = "https://cfx-nui-" .. GetCurrentResourceName() .. "/ui/assets/icon.png",

        fixBlur = true 
    })

    if not added then
        print("Could not add app:", errorMessage)
    end
end

addApp()
print("https://cfx-nui-" .. GetCurrentResourceName() .. "/ui/assets/screenshot-dark.png")
AddEventHandler("onResourceStart", function(resource)
    if resource == "lb-phone" then
        addApp()
    end
end)


RegisterNUICallback("drawNotification", function(data, cb)
    BeginTextCommandThefeedPost("STRING")
    AddTextComponentSubstringPlayerName(data.message)
    EndTextCommandThefeedPostTicker(false, false)

    cb("ok")
end)
