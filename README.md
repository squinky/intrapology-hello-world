# Intrapology

# Initial Setup
- Download the code in this project and put it somewhere sensible - it will become your project folder
- To run the code on your computer, you'll need to set up a simple local testing server
    - Here is a good tutorial on how to do this: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server

# Running the App
- Main Page: YOUR_URL_HERE/
- Subtitles: YOUR_URL_HERE/#/subtitles
*TODO: separate pages for moderator/actors*

# Settings
- Open settings.json and edit the following values:
    - **performanceId:** Make sure you name this something unique (eventually, we will be able to check this automatically)
    - **modPassword:** Whatever password you would like the moderator to use
    - **title:** The title of your performance
    - **callers:** The characters in your play who will be performed by humans, in array format
        - You can now add as many or as few callers as you want, whether it's \["Apple"\] or \["Apple", "Banana", "Carrot", "Daikon"\]
    - **videoCallEmbedLink:** The embed link for your video call, URL only
    - **styles:** Change colours and fonts here
    - **defaultAudienceMessage:** The message to be displayed to the audience when nothing else is happening

# Writing with Ink
- Download Inky: https://www.inklestudios.com/ink/
- Open script.ink to see some examples of what you can do
- Export your work to JSON as "script.json"

