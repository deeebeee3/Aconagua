# Aconagua
BB1 Application Development

## Set up theme and extension developer tools

NETSUITE SETUP

TO ENABLE FEATURES FOR SUITECOMMERCE:

In NetSuite, go to Setup > Company > Enable Features.

In the Enable Features page, click the SuiteCloud tab and enable the following features:

SuiteScript field group:

Client SuiteScript

Server SuiteScript

SuiteScript Server Pages

SuiteTalk field group:

Web Services
In the Web Presence tab, enable the following features:

Web Site field group:

Web Site

Web Store

Advanced Site Customization

Descriptive URLs

SuiteCommerce Advanced

Publishing field group:

Host HTML Files
Access field group:

Online Ordering
THEN INSTALL FOLLOWING BUNDLES :
(ALWAYS CHOOSE MOST RECENT DATE)…

Product Merchandising
Reference Product Lists Records
Reference Product Review Records

SuiteCommerce Advanced (Aconagua)
SuiteCommerce Configuration
SuiteCommerce Extension Management
SuiteCommerce Base Theme

Setup a Domain:

Setup > SuiteCommerce Advanced > Domains > New

DOMAIN NAME: deepaktestsite.bluebridgeone.com
CNAME (ALIAS): deepaktestsite.bluebridgeone.com.hosting.netsuite.com
WEB SITE: SCA Demo
HTML HOSTING ROOT: Live Hosting Files
TOUCHPOINTS: Add all of them…

Click Save…

Link your application to your development domain.
The development domain is the domain used by developers before your site goes live. Link your application to this development domain to make sure everything is set up correctly. When you are ready to go live with your web store, link the application to your production domain.

Go to Setup > SuiteCommerce Advanced > SSP Applications and click View next to scs.
Note that if you are using SuiteCommerce Advanced, you have access to two applications: Dev and Src. Link to the SuiteCommerce Advanced — Dev <release> application.

Click Link to Domain.
IMPORTANT Link SuiteCommerce to a domain, not the entire site. If you link to a site, you lose all support for themes and extensions. This is also true for the Aconcagua release of SuiteCommerce Advanced or later.

Select the development domain for the desired site.

Make sure all touch points are clicked
Click Save, overwrite: YES

NAVIGATE TO SITE TO MAKE SURE IT IS RUNNING:

http://deepaktestsite.bluebridgeone.com/

TO SET MINIMUM SITE RECORD FIELDS :

In NetSuite, go to Setup > SuiteCommerce Advanced > Set Up Web Site.

Click Edit next to the site you want to set up.

On the Setup tab, in the Home Page field, select Hosting Files : Live Hosting Files.

On the Shopping tab, on the Currency and Languages areas, enable at least one currency and one language to be online as the default.

Save the Web Site record

IMPORT FIELD SETS
Data from NetSuite, such as item information, is made available to your web store by defining a set of fields to expose. This section explains how to use a pre-defined script to quickly populate your site with required Field Sets. You can add fields specific for your business to this script or just accept the defaults to begin.

Copy the contents of the Field Set Script below to a text editor.

Edit the siteID variable with the site id you want to use.
The site id is displayed in the URL when you navigate to the Web Site Setup page for the desired site.
NOTE The default value of 9999 fails, since no site is ever assigned an ID of 9999.

Set the configurable options as required.
Each Field Set Setup Script includes a few options you can set. The default options add fields for using Product Reviews but not for Pickup In Store. Set the has_store_pickup flag to true if you intend to use Pickup In Store in your web store.

Optionally, add any field set definitions as needed for your site.
The script includes all required fields and provides a good starting point for your website.
IMPORTANT The Field Set to return item details is named details. If you decide to use a different name, you must configure that change as described in Items Fields Advanced Name on the Backend Subtab.

Save your modified script.
Your modified script can be used to quickly replicate a site setup during development.

Execute the script in the SuiteScript debugger.

Go to Customization > Scripting > Script Debugger.

Enter the SuiteScript Debugger domain (by clicking the link as indicated) and then re-enter your login credentials if prompted.

From the API Version dropdown, select 1.0.
IMPORTANT This script can only be run against SuiteScript Version 1.0.

Copy and paste your modified script code into the debugger.

Click Debug Script and then hit the Continue button.

After the script has executed, field sets are properly populated and can be verified in the Field Setstab of the Web Site Setup record.

FIELD SET SCRIPT
NOTE: If you have previously set up fields for your site, before running this script delete any field sets that are currently defined for the website where you want to run the script. Use caution when doing this as deleting field sets required for your site can have unintended results.

SET UP THE SEARCH INDEX
After setting up your field sets, create a minimum search index. The search index is needed for your web store to have access to data associated with defined field sets. You can enhance this at a later time.

TO SET UP THE SEARCH INDEX:

In NetSuite, go to Setup > SuiteCommerce Advanced > Set Up Web Site.

Click Edit next to the site you want to set up.

On the Search Index tab, Facet Fields subtab, select at least one facet in the Facet Field Name field to enable in the frontend (for example, Online Price).

Save the Web Site record.

DOWNLOAD THE CODE FOR LOCAL DEVELOPMENT

Documents > Files > File Cabinet >

Web Site Hosting Files > Live Hosting Files > SSP Applications > NetSuite Inc. - SCA Aconcagua > Source > Download….

Download ExtensionDevelopmentTools-18.1.zip and ThemeDevelopmentTools-18.1.zip from:

Documents > Files > File Cabinet - SuiteBundles/Bundle 228895/ (Aconagua)

Add it to a git repo…
Setup .gitignore file…

Unzip and add to repo like so:

Root Folder -
- AconaguaSource
- ExtensionDevelopmentTools
- ThemeDevelopmentTools
.gitignore
README.md

Run npm install in ExtensionDevelopmentTools and ThemeDevelopmentTools folders.

_____________________________________________________________________

###THEME SETUP

Go to Setup > SuiteCommerce Advanced > Extension Management and activate a theme first.

Select the SuiteCommerce Base Theme and click “next” 

Wait for the Activate Extensions installation to complete (the green progress bar will reach 100%)

Once at 100% click Next… Summary should show everything completed successfully… Then click Finish

Now download the theme to ThemeDevelopmentTools folder… by navigating to that folder and running:

gulp theme:fetch

Enter email / password

Select:

1. TSTDRV1939960 - SDN SCA Mont Blanc Testing - Administrator
2. SCA Demo
3. Domain (deepaktestsite.bluebridgeone.com)

A “Workspaces” folder will be created in ThemeDevelopmentTools folder, which contains the theme
_____________________________________________________________________

### TEST THEME ON LOCAL SERVER

Run:

gulp theme:local 

This command compiles all source files, including your theme and any extensions customizations, into combined files within a LocalDistribution/tmp directory.

The local server starts automatically. With the local server running, you can make changes to your local files and see the results immediately. Gulp.js automatically recompiles the application when you save any changes to theme-related HTML, Sass, or assets. Simply refresh your browser to see the changes.

To see local site / changes navigate to:

http://deepaktestsite.bluebridgeone.com/sca-dev-aconcagua/shopping-local.ssp

**notice the SSP URL root and also the use of “-local”**

IMPORTANT: If you add a new file or make changes to any overrides after launching the local server, you must run thegulp theme:local command again to include the new changes. Gulp.js does not automatically compile new files or process overrides.

There are three key Gulp commands for working locally:
* gulp theme:local — spins up the standard local server
* gulp theme:local --preserve-manifest — spins up the local server without updating the manifest
* gulp theme:local styleguide — spins up the local server, and a second local server for viewing the live style guide
_____________________________________________________________________

### PREPARE FOR A NEW THEME

Fetch the Active Theme (this will overwrite any files you have in your workspace): 
	
	gulp theme:fetch

Create the New Theme in NetSuite

	gulp theme:deploy --create

￼

_____________________________________________________________________

### VERSION CONTROLLING THE THEME

In your parent directory (which I've called SCA-THEME), create a file called .gitignore and in it put:

# exclude everything except for Workspace/<theme>

/*
!/Workspace
/Workspace/*
!/Workspace/My_Super_Cool_Theme

For details on what's going on here, take a look at their documentation but I'll summarize:

* (The first line is just a comment to us)
* Ignore everything!
* Except the Workspace directory
* But then ignore everything in there!
* Except the My_Super_Cool_Theme directory
* 
Then, in your command line, run git init; when that's done, run git status — you should see this:

$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    Workspace/

nothing added to commit but untracked files present (use "git add" to track)


Running git add . and then git status will give you a long list of green text, itemizing all of the goodness we're going to be saving. Crucially, they should be within the Workspace/My_Super_Cool_Theme directory. If they are, and you're happy, go ahead and do git commit -a -m "Super Cool Theme -- initial commit".
_____________________________________________________________________


￼





