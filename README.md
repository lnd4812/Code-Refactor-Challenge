### Code Refactor for Horiseon Social Services, Inc.

## Description
The purpose of this project is to update Horiseon's web-site to improve key aspects in order be to more accessible to people with disabilities.  Improvements, such as how the site loads and displays visually and featuring "alt" definitions with each of the images will be implemented in such a manner as to strengthen Horiseson's position in on-line search engines.

Coding will also be revised to remove redundancies in either or both the HTML and CSS files and create a more distinct outline for each section of the HTML to more clearly define what they represent and enable other collaborators who work on this website to more easily follow the code.

## Credits and external Resources
.   For a full description of Horiseon's requirements, please visit the project page [https://courses.bootcampspot.com/courses/1181/assignments/23346?module_item_id=458708].  
.   Original source code cloned from repository [https://github.com/coding-boot-camp/urban-octo-telegram].  
.   GIMP image manipulation and image editing software [https://www.gimp.org] 

## Requirements
No special requirements 

## URL


## Design
Initial review of code indicated several problems in display and function outside of accessibility issues upon launch of website.
2.  Coding Functionality and Legibility
    .   Search Engine Optimization in <nav> section not linked to corresponding <Main> section, requiring the addition of an <id> attribute.
    .   Distinct sections defined by <div> and class tags had to be updated to Semantic HTML tags, making flow of code easier to follow. Updated CSS coding accordingly. 
    .   As the same references used as <id> attributes were also used as class names for each of the 3 services in the <main> section and similar CSS coding used for all 3, assigned all 3 class of "services" and revised <div> containers to semantic html <article> tags.
    .   Consolidated all 3 benefits in <aside> section into 1 <div> with same class reference as CSS coding noted to be the same for all 3; CSS coding subsequently also consolidated for all 3.
    .   removed CSS coding for <header div ul> list style - redundant


3.  Appearance and display
    .   All image files were to large to enable fast loading of the site
        Revision(s) - reduced all images to size that would load quickly without significantly affecting image quality, updating <img> tags accordingly.
    .   No "alt" descriptions were included with the image files.
        Revision(s) - added descriptive "alt" comments for all images.
    .   Colours of <header>, <main>s and <aside> sections were off slightly from each other as to almost clash.
        Revision(s) - changed background colour of Services <main> and Benefits <aside> to match <header>: #2a607c
    .   Black of icon images in <aside> would be difficult to see by some users with limited sight.
        Revision(s) - changed colour of icons from black to white using GIMP, updating <img> tags accordingly.
    .   Bottom margin of <main> and <aside> sections was noted to be uneven
        Revision(s) - created <div> to include both sections, adjusted bottom margin and spacing of <aside> to match bottom margin of <main> at 786px, which should also make it easier to adjust when site updated to be responsive when viewed in other platforms or screen sizes.
    

