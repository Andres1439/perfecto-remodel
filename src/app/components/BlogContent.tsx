"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Blog content data
const blogPosts = [
  {
    id: 1,
    title: "Make your kitchen dream a reality!",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Kitchen is the beauty of the entire house; a key part of the house. It's not only a place for eating but it is also a place for people to share ideas and form strong relationships. Design the space to be expansive, airy and bright to create a refreshing and uplifting atmosphere that reduces stress.",
      "We try to understand the needs of the family and then work to create a luxurious, innovative and functional kitchen that would serve the best and have a timeless elegance.",
      "We count here at PERFECTOREMODEL CORP with specialized installers and skilled trades people who perform a job that is worth all the cost of designing your kitchen. The entire process is completely unique and conceptual, setting a remark apart from the crowd.",
      "And if you're a Budget-Saver of course we can assist with a less elaborate remodel as well. For limited budgets, consider investing in a modern layout, quality cabinets and modern countertops.",
      "Majority of the customers seek unique innovative designs with a touch of style in their kitchen. Large or small, an organized, well-designed kitchen can save you money, time and make preparing meals safer and more enjoyable.",
      "With all of the options and costs to consider in kitchen remodeling, hiring a professional contractor will be the best money you spend. So whether you're making improvements to sell your home, or you want to enhance your current lifestyle to create a command center for family life or entertaining.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog1.jpg",
  },
  {
    id: 2,
    title: "Cabinets",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Something as simple as cabinets can make a big difference in your new kitchen remodel. Regardless of the size of the room; kitchen cabinets provide great functionality to the users since there are lots of items to be kept into appropriate places.",
      "It's our mission here at PERFECTOREMODEL CORP create moderns kitchens with cabinets that are custom made to suit the lifestyle and taste of the homeowners.",
      "Besides you can keep in mind several benefits about cabinets",
      "The right cabinetry can help organize your home and life. Remodeling or designing your kitchen is the best time to plan for organization and buy the right cabinets to maximize your storage space.",
      "Depending of which one you choose can last a whole life: Cabinets can come in all shapes and sizes. Choose wood or wood veneer with sturdy drawer slides and hinges.",
      "Notice that you may want to save money with factory-built cabinets that are usually more precisely cut, more durable and offer a warranty of up to 25 years. It is important to know that yours will last and hold up if anything should happen in your house.",
      "Cabinets can often be up to 50% of your kitchen budget. Be sure that are built of quality construction that will last and protect your belongings.",
      "Bring style to your house: A lasting finish can double the life of your cabinetry and be the piece of style that brings the whole room together. Kitchen is a place where many things happens and were so many people stop by. That's why it is a crucial room in your house and people have a tendency to congregate there for eating, drinking or just generally hanging out.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog2.jpg",
  },
  {
    id: 3,
    title: "The bathroom, your safe space.",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "The bathroom is more than just a maintenance room for life where we, often-times, start the day as well as end the day; let's give the important that needs.",
      "If we think about it other than our bed, the bathroom is where we essentially begin and end each day. Often, what happens in the bathroom will set the tone for what will happen the rest of the day. Funny fact…did you know the average person will spend at least 1.5 years of their life, in the bathroom?",
      "For many years the best ideas come in the shower. It's that sacred space where you can also rehearse that big presentation you are giving later that day or even to prepare for your job interview. The bathroom can offer that momentary space of solitude as well as a great place to unwind from the stresses of the day with a nice hot shower or warm bath. It becomes much more than just another room in the house, it becomes a safe space.",
      "Did you know that on average, American homeowners will get back 71 cents back from every dollar they spend on remodeling or updating their bathroom? True, it would be great to get every cent back, but there is no arguing that 71 cents is a significant return on investment.",
      "For all this reasons the bathroom is so important, creating your own personal space or oasis is a major reason why people decide it is time to remodel or update their bathroom.",
      "Certain installation work is more complicated than others and should be handled by an experienced professional installer company such as us PERFECTOREMODEL CORP were our mission is to make your dreams a reality.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog3.jpg",
  },
  {
    id: 4,
    title: "Is it indispensable a carpenter for your house?",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "A carpenter is almost indispensable as far as the construction industry goes. Transforming a space into your dream house",
      "We PERFECTOREMODEL CORP are experts in a range of fields and our carpenters work; to ensure that your finished project is completed to perfection, covering a multitude of different areas including setting foundations, laying new stairs, installing beams and installing trims, decorations and much more.",
      "As the work is all done in-house locally, our carpentry team would be able to assist you, should you wish to make any adjustments to the carpentry in your house, be it commercial or residential; a carpenter can manage lots of different parts of a new build, extension or refurbishment. Our service of carpentry can cover kitchens, bathrooms, doorways, floors, roofs, framework, paneling, molding, ceilings.",
      "Basically put a carpenter carries a variety of skills putting them perfectly in your sights if you are looking to change an area in your home or property. Carpenters can repair or remodel existing structures of all kinds",
      "We always communicate precisely to the people involved in any new build or any type of construction.",
      "Any plans can be transformed perfectly to meet the requirements of the person in charge; be it a home or property owner, a project manager, architect or site manager. Things can change very easily during any type of project that a carpenter is involved with.",
      "You can incorporate your ideas and your chosen tradesman should always understand the importance of getting the work completed to a perfect finish.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog4.jpg",
  },
  {
    id: 5,
    title: "Shingle roofing",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Asphalt shingle roofing have become popular and recognized as economical, durable, longevity solution for all kinds of residential roofing with adequate protection and it's North Americans favorite choice.",
      "Traditionally, asphalt roofing is one of the best fit for home as economical roof protection and widely used fire-resistant covering.",
      "Asphalt is the kind of material widely used for residential roofing relatively for low cost and easy installation; shingles are not so heavy that you have to worry about whether or not your roof can hold them.",
      "There are several types of shingles and there's even a friendly type; unlike plastics, asphalt doesn't degrade with repeated recycling. …Organic shingles are waterproof, environment-friendly and use materials such as wood fiber, cellulose, and waste papers",
      "Shingles have various qualities and tend to last long in the constant conditions. For instance, it works well in hot weather areas which doesn't get much affected by other weather conditions such as winter and vice versa if implemented in snowy areas.",
      "Asphalt shingles are manufactured to provide adequate roof protection and to survive fire damage, rain, wind, and hail. Asphalt shingles come in wide variety of colors such as red, green, blue, yellow and various patterns available to enhance the appearance of your residence",
      'Today\'s asphalt shingle roofing strikes a good balance between cost, benefits, and a virtually endless array of color and texture options that will fit any project regardless of style and color scheme. Manufacturing techniques have also advanced to the point where you can get so much value even from so-called "entry-level" shingles.',
      "Some companies produce roofing shingles designed to withstand hurricane-force winds and extreme temperatures, with additional provisions for venting trapped heat and moisture in the attic.",
      "Last but not least an underestimated advantage of a shingle roof is its ability to insulate sound. The composition of asphalt roofing shingles in a complete roofing system offers sound protection from external noise. Asphalt shingles can be significantly quieter than metal roofs, depending on the design, and much quieter with large downpours and hail",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog5.jpg",
  },
  {
    id: 6,
    title: "Hire an assembling expert and save money",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Produce finely made house and office furniture that just need to be assembled to be good to go. It is very important to hire an expert for assembling . Otherwise, you will find yourself going back to the shop.",
      "Hire an assembling expert and save money, time and frustrations.",
      "Imagine that you're walking into a furniture shop, buy and have it assembled within hours in the house. This saves you a lot of time unlike making the furniture on your own. Hiring us you will have an entire room fixed; instead of wasting your values hours assembling wrongly, hoping you won't damage the furniture you're assembling at the moment. The probability of an accident is very high. Here at PERFECTOREMODEL CORP we guarantee you safety during usage. We will ensure that every joint is safely screwed together and all bolts well fastened.",
      "For something that seems so simple at first glance and It's technically possible for anyone to assemble their own furniture, it's not recommended, some instructions may be omitted in the manual, but with an expert, you are sure that this will be fixed professionally. Safety for the family and guests is our priority.",
      "Whatever the job is, experience is always important. That's why we count with an expert Handyman or team of Handyman that will assemble anything you need with the right tools and the proper know-how on how to use them. Not only that, but we'll have everything organized neatly, which means things will go as smooth and fast as possible.",
      "Alleviate stress completely, because you won't be dealing with it at all. We have the knowledge to know how the entire procedure pans out, Assuring quality assembling services by hiring us PERFECTOREMODEL CORP that assemble furniture. A company filed of skill people and knowledge of installing furniture items. You cannot spend much of your finances by hiring furniture installation professionals.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog6.jpg",
  },
  {
    id: 7,
    title: "Drop ceiling",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "A drop ceiling is a great way of covering pipes, wiring, flaws and obstructions on an old ceiling. It is also an affordable and easy to install technique. That said, it is worth getting a professional such as PERFECTOREMODEL CORP to carry out the installation as they will be able to offer advice on the most suitable materials and the finished product will be completed to a higher standard which is our goal.",
      "The primary advantage of a drop ceiling is accessibility; as suspended ceilings sit lower than your structural ceiling, if you ever need access to the hidden pipes or wiring in between the suspended and structural ceiling, you can lift the appropriate panels and move them over to one side. Then when you have finished you can drop them back into place.",
      'Sound suppression is another benefit of an acoustical ceiling. They\'re called "acoustical" ceilings for a reason!. Sound absorption is especially critical in theater and music rooms.',
      "Some ceiling tiles are manufactured for soundproofing; this is a lot cheaper than soundproofing a traditional ceiling. This type of tile is extremely beneficial for schools and busy offices and the reduction in sound will make the working environment more pleasurable.",
      "A stunning benefit of this ceiling is that can help improve fire resistance as many of the tiles provide a 30 min fire resistance; and over time, if any of your suspended ceiling tiles get damaged, you can replace them easily and will only need to replace the damaged tiles, not the whole ceiling If your premises are subject to high humidity, a suspended ceiling may be the perfect solution for you. The materials used in suspended ceilings are resistant to mould, moisture and bacteria.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog7.jpg",
  },
  {
    id: 8,
    title: "Masonry construction",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Masonry construction can provide beautiful walls and floors at economical prices here at PERFECTOREMODEL CORP with some amazing's advantages. Being a non-combustible product and can protect the building from fire. Masonry walls are more resistant to projectiles, such as debris from hurricanes or tornadoes. Besides masonry construction tends to be durable and often requires little maintenance.",
      "The art of masonry originated when early man sought to supplement his valuable but rare natural caves with artificial caves made from piles of stone.",
      "With the advent of Gothic forms, masonry construction in a historic sense had solved the problem of spanning space entirely by material in compression, the only design formula suitable to stone. .",
      "Many architects value masonry for its color, scale, texture, pattern, and look of permanence. In addition to its aesthetic appeal, masonry has a number of other desirable properties, such as its value in controlling sound, resisting fire, and insulating against daily fluctuations in temperature.",
      "The fire protection benefits of concrete masonry are recognized by the Fire Service and the insurance industry. The extra ability to resist fire comes from the type of aggregate used, and the equivalent solid thickness of the masonry units.",
      "Masonry construction provides solidity, permanence and a real sense of substance. Concrete masonry is an ideal sound barrier; providing reduced sound transmission relative to the size of the wall.",
      "One of the most unusual advantages of concrete masonry is the cost savings; derived from its capacity to store energy and to delay the passage of heat.",
      "This unique feature, known as the 'thermal mass effect', allows masonry buildings to be designed with less additional insulation. Hence; material costs and energy consumption can be reduced, and the comfort of living space is improved.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog8.jpg",
  },
  {
    id: 9,
    title: "Rain gutters",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Rain gutters are one of the most vital elements for the health, safety & longevity of your home.",
      "Rain gutters serve many important functions that will benefit your home for years. From keeping your possessions dry to preventing damage to your home, gutters can help save you additional money and maintenance. Their purpose is to divert the rain away from your roof and onto the ground in a controlled way.",
      "Using gutters on that side of the home will allow you to redirect the water towards a downward sloping side. A small gutter along the ground will assist with any runoff from the landscaping.",
      "This is due to a curved piece attached to the end of the gutter; called a downspout, which dumps water onto a splash block. The splash block rests on the ground, slows down the force of the water pouring out and directs it safely away from your home's base.",
      "It also prevents your home from getting sloppy, as it splashes dirt and residue against siding. Over time, this will cause your home's appearance to look dirty, forcing you to clean up the mess often, Gutters consolidate rain, keeping your home looking like new without extra effort",
      "It also helps prevent mold which is likely to grow in unwanted places due to humidity and weak ventilation; difficult to remove and toxic to your home if not treated correctly. Rain gutters can reduce the rush of water seeping into your home and therefore lower the chance of mold development.",
      "Remember that water excess may ruin your yard and the curb appeal of your home. Proper gutters keep erosion on the check.",
      "The main job of good gutters is to channel rainwater into the underground drainage system and prevent rain from accumulating around the home and eroding the soil. Rain gutters can control the amount of water passed into your yard, which is better for your grass, plants and vegetation.",
      "Well now you know the benefits of having rain gutters for your home, you should consider making the investment to keep your home dry and preventing unnecessary problems.",
      "Gutters, when installed perfectly with professionals like us PERFECTOREMODEL CORP, can make your home completely waterproof.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog9.jpg",
  },
  {
    id: 10,
    title: "Flooring",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "If you want to change the look of a room, change the floors. Flooring can make your space look instantly cooler, warmer, larger, smaller, more intimate, cozier and more luxe.",
      "Quality installation made by professionals like us PERFECTOREMODEL CORP makes a world of difference in the appearance of your flooring. An installation done right can make budget-friendly flooring look high-end, but conversely, a second-rate installation can leave even the best flooring with obvious seams, lumps, gapping and other issues. You will want to guarantee a clean and beautiful installation that will last for years.",
      "Us PERFECTOREMODEL CORP count with an amazing group of Professionals installers that can draw on their training and years of experience. A high level of expertise will come in handy when deciding how to secure the floor. Acclimating the new flooring to your home, a process that involves exposing the wood to air. Acclimation allows the wood to expand and contract while adjusting to the new environment, which is necessary before installation.",
      "Creating room for your new floor is also important; your old floor has to make room for the new one, and this might involve the temporary removal of baseboards and moldings. Our Professionals installers will provide advice on which option between removing and replacing your old floor and installing directly over it would benefit your interests best. If removal and replacement is the best choice, they will help you decide the best time to remove the flooring as well as its disposal",
      "We will also evaluate every affected door for clearance over your new floor. Some doors might require temporary removal or shaving to clear the new hardwood floor.",
      "Once the floor is in place, we always collect and remove all the waste before cleaning the installation area.",
      "Your flooring directly impacts the way you experience your home. Flooring can affect acoustics in a family room or home office, letting you enjoy family time or work more. It can make it easier to walk around barefoot or in slippers. And can even help make your space more attractive to buyers.",
      "By hiring a flooring professional, you have more time for the more important things. You can go to work and run errands while our installers finish your flooring. Which is a guarantee that they'll get the job done in one go. We Count with the necessary equipment to the job site. You don't have to concern yourself with spending time and money to collect the equipment that you need.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog10.jpg",
  },
  // Additional posts to reach 18 total
  {
    id: 11,
    title: "Exterior Painting",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "A basement can be a place of possibilities once I’ll be well-finish can turn into a modern basement warm, inviting, and just as beautiful as the home’s main floor.",
      "You might not be conscious, but finishing your basement can be a great way to add equity. By adding practical square footage you’re adding to the value of your investment.",
      "If you decide to sell your home, it will have a significantly higher market value with a finished basement. The sale may be easier, as well. Potential buyers may not be thrilled at the prospect of an unsightly basement.",
      "An unfinished basement rarely holds appeal for prospective buyers. However, your pool of interested homeowners will grow significantly with a renovated basement. Not only will you increase the number of interested buyers, but also the value of your home as well.",
      "Your three-bedroom home might seem large enough for your family but we all know that over time we end up needing more space. Instead of dealing with contractors and renovators down the road, finish your basement at the time of purchase and have space for a gym, home office, guest room, storage, or a play room. A really good basement can be the place to cuddle up with your family and to watch a movie or play games. It also doubles as a great entertainment area.",
      "Movies, games, and musical practice of any sort can be quite distracting for those not involved. Having it located in the basement means that you don’t have to worry as much about your noise levels. If used as an exercise room, the cooler temperatures will help keep you from overheating. It’s also a perfect place for large exercise equipment.",
      "A basement can be the perfect place to put a guest room. It’s quiet and isolated so your guests will have the privacy they need. Even more advantageous, the potential to rent out this extra room becomes available. Renters will appreciate the added privacy, and it’s an easy way to receive some extra income.",
      "In this way, a finished basement can be used to give you some income property. one extra point is that is separate enough from the other rooms to give the owners and renters privacy. If you need a little extra money, giving your basement a simple makeover can provide that for you in the long term.   And If you don’t feel comfortable to receive other persons can serve as extra storage. Besides can keep all your extra furniture and items in an easily accessible, but no obstructive, space. It’s a great place to store things inside the home while also keeping them out of the main living areas.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog11.jpg",
  },
  {
    id: 12,
    title: "Interior Painting",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Home wallpapers are fast becoming a new trend, as they are simple to install and able to bring additional texture to any room. If you are thinking of giving your house a face-lift, but hesitant to replace the paint with wallpaper. So if you need to update the wall there are many finishing materials for walls and partitions: paint, plaster, fabric, wood, stone, finally, glass and mirrors and wallpaper.  It is the easiest and quick way to decorate your house or any other place and make it cozy, fashion, modern and creative.",
      "Wallpapers can be, if desired, easily removed, and then, on the same surface, you can paste other wallpaper or paint it. They look nice and relatively cheap. In addition, their use does not cause so much trouble, as the painting of the walls.",
      "It can be very versatile. Wallpaper can simulate a wide range of finishing materials (except, perhaps, the glass and the mirror).Today, wallpaper can imitate anything: marble and Venetian plaster, gold and rusted iron, shagreen leather and lights of the big city.",
      "Compared to paint, the wallpaper will last longer. If it is properly installed, it will be able to hide the imperfections on your wall for years.",
      "Besides being durable and cost-efficient, wallpaper gives your house a designer look. With a wide range of wallpaper available, you are able to choose from a flat color, textured wallpaper or even a specific image or design of your choice.",
      "Besides being durable and cost-efficient, wallpaper gives your house a designer look. With a wide range of wallpaper available, you are able to choose from a flat color, textured wallpaper or even a specific image or design of your choice.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog12.jpg",
  },
  {
    id: 13,
    title: "Deck Construction",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Pressure washing is the application of high pressure water; is a great way to create a healthier environment for your family, it’s a cost effective way to add curb appeal and value to your property. Besides you will be ridding the surface free of dirt, mold, mildew, tannin stains from leaves and sticks, rubber marks from tires, oil, & irrigation rust. Mold, mildew, dirt and dust can cause health problems.",
      "Power washing can restore your deck, siding or sidewalk to its original condition. According to the National Association of Realtors, you can expect to add $10,000 to $15,000 to the sales price after pressure washing exterior siding.",
      "Hiring us PERFECTOREMODEL CORP to pressure wash your property is the best option, A pressure washer in the hands of a novice can be dangerous, you are dealing with high pressure water which can physically injure a person if you’re not careful and can also damage your homes siding if you are not properly trained in the use of a power washer, not to mention that you may have to climb ladders that will be wet and slippery.",
      "Power washing houses can reduce the likelihood of future repairs related to rot and decay. These types of repairs can be expensive, which is why many homeowners appreciate and take advantage of power washing services. Power washing can also help extend the life of your exterior siding.",
      "Mold and mildew flourishes in moist shady areas. The risk of mold and mildew growth increases if you have overflowing gutters or live in an area with high humidity. To prevent mildew and mold from growing on your home’s siding Pressure washing is the option to choose",
      "Usually, mold and mildew aren’t a problem when they occur outside the home. However, it is still possible for mold spores to waft into your home via cracks, doors, and windows. If you or a loved one has asthma, you’ll want to make sure to eliminate any airborne contaminates by power washing mold and mildew from your siding. Mold has been known to cause breathing problems in children and the elderly. So get rid of that with pressure washing.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog13.jpg",
  },
  {
    id: 14,
    title: "Window Installation",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "The fence installed around your property, home, farm or even school is the first thing that people will see when they visit. A poorly chosen fence, such as a chain-link one, offers very little security and privacy to a home; hence, it is not advised for securing a property.",

      "The fence installed around your property, home, farm or even school is the first thing that people will see when they visit. A poorly chosen fence, such as a chain-link one, offers very little security and privacy to a home; hence, it is not advised for securing a property.",
      "Security is one of the main reasons why people invest in fences",

      "Areas with high levels of crime are equipped with wooden fences and probably an electric mesh on the top of the wooden fence, to prevent any intruders.",
      "A fence will come in handy if you live in an area that has proximity to a wildlife reserve, as it will prevent wild animals from entering your property and causing harm to you and your family.If you have children, siblings or pets, a fence will prevent abductions.It will help you avoid disputes with your neighbors; such problems can sometimes lead to expensive lawsuits",
      "Installing a fence will also help you to know how much space is remaining on your property, so that you can plan accordingly if you have any renovations or additions in mind.",
      "Some fencing types add a decorative appeal to your property, as they have ornamental elements on them. Such types of fences will add an instant appeal to your house, thus increasing the value of your home. A good, high-quality fence is always a great investment. You will then end up reselling your property at higher costs, which will be more profitable for you.",

      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog14.jpg",
  },
  {
    id: 15,
    title: "Drywall Installation and Repair",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "A shed is a place that you can use for workshops, as storage space; keep your planters, etc. A shed can be a prefab, or you can get a custom shed made based on your requirements here at PERFECTOREMODEL CORP.",
      "Many a times, prefab sheds are not of much value. They can be a misfit as per the available space. So, to avoid any hassle, its highlight recommended to choose the custom sheds. These are made as per the requirement of the client; so before you go ahead and customize these sheds, let’s understand their benefits first.",
      "Custom sheds are good if you want to be creative when it comes to making a shed in their property. You can add windows to it, and design it as you like as per your requirements and preferences.",

      "These sheds can also be a great addition to your place. You can design the shed as an extension of your place, or you can choose a separate design for it. You can also choose the design that you want. You can make it more colorful and make it even more attractive. It also adds to the value of your property besides, the shed also makes your home more elegant.",
      "Sometimes, the custom sheds can be a great choice if you wish to make optimal utilization of the space available in your property. You can design it in a way that it completely fits in the available space. One of the primary purposes of having a shed is to store things and keep them safe from outside elements. All these keep your products safe, secure and well-organized, and you can easily access them when required.",
      "  Us PERFECTOREMODEL CORP an experienced custom sheds builder; know about the regulation of building shed, and therefore we will make it as required legally so you’re place be design and structure properly",
      "This means that at the end, you will be 100 percent satisfied because your sheds will have all what you want. You will have a shed that offers you high level convenience, not only to you, but your entire family.",

      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog15.jpg",
  },
  {
    id: 16,
    title: "Electrical Services",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Insulation is the most effective way to improve the energy efficiency and comfort to your living environment. Insulation of the building envelope helps keep heat in during the winter, but keep heat out during summer to improve comfort and save energy. Insulating a home can save 45–55% of heating and cooling energy. Adding home insulation to an existing home will regulate the temperature, making your living environment more enjoyable, especially in places of extreme weather.",
      "Adding home insulation to an existing home will also increase sound control. It creates a sound barrier, keeping unwanted sounds out and protecting your privacy so you won’t have to worry anymore about your neighbors; by keeping the sounds from inside your home from being audible outside.",
      "This will protect all of your possessions indoors and create a much more comfortable living environment inside. Another benefit of home insulation is keeping environmental pollutants and allergens out of your home. Home insulation creates an added barrier between you and the outside world, keeping your home environment regulated, healthy and comfortable.",
      "Insulation acts as a barrier to heat flow. It can make your home more comfortable by reducing the amount of heat escaping in winter and reducing the amount of heat entering in summer. You can significantly reduce your heating and cooling bills and help to reduce greenhouse gas emissions.",
      "In other words…",
      "It reduces the cost of heating and cooling by over 40%",
      "it pays for itself in around five to six years",
      "Due to less use of energy to heat or cool it saves non-renewable resources and reduces greenhouse gas emissions; In most cases eliminates condensation on walls and ceilings",
      "Most thermal insulation materials have acoustic properties",

      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog16.jpg",
  },
  {
    id: 17,
    title: "Plumbing Services",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Although many of us use railings everyday, we don’t often stop to consider the importance of railings for safety. Railings seem to complete the design of our porches and decks, and they’re a convenient spot to hang flower beds, lights, or bunting. We love to lean on them, but we often take for granted the fact that our railings are sturdy, strong, and aptly sized. So today, we’re here to remind you of the importance of railings for safety and also to remind that is an area that is often looked at closely during inspections, so make sure to choose the appropriate company for this work. Here at PERFECTOREMODEL CORP; our mission is to make the work the best.",
      "We count with an incredible group of workers who can make your dream house",
      "There are certains types of Railing",
      "Deck rails come in a huge variety of styles and installation methods. You can find them in almost any common material, from metal to wood and composite lumber products.",
      "There are three main categories of railing construction so you can choose from:",
      "Complete rail systems: These come either fully assembled or ready to assemble and are the simplest method for rail construction. They are also typically the most expensive. If you choose this route, study the manufacturer’s literature closely before you begin.",
      "Railing components: Often similar to complete rail systems, these types of railings come with pre-machined top and toe rails and balusters of various styles that fit between the rails. These types of rails go together quickly and take much of the guess work out of construction.",
      "DIY railing: Standard lumber can be made into a simple railing fairly simply. You will need material for the top and toe rails and something to use for balusters in between.",
      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog17.jpg",
  },
  {
    id: 18,
    title: "Landscaping Services",
    date: "Published October 15, 2020",
    author: "By admin",
    content: [
      "Retaining walls play a critical role in the protection of structures from damage related to soil collapse, but many property owners are unaware of just how integral these walls are to the overall health of their property, If you want to maintain and spend more time in your dream house Soil collapse  is a risk factor you must consider based on the fact that can put your building at risk for damage and any bystanders in physical danger, so it’s vital to maintain your retaining walls properly, and to understand their role in the protection of your home or commercial space.",
      "But what are retaining walls?…",
      "Retaining walls are structures designed to restrain soil; which prevents soil from eroding slowly or collapsing suddenly and also provide support. These walls may be constructed from a variety of materials; including reinforced concrete, timber logs, concrete blocks, brick or stone. They may be built to support terraced gardens or fill earth, in addition to excavation sites and filled embankments.",
      "Once you know what is; you should also know that protecting your retaining walls you protect your property",
      "Both, new and long-established retaining walls should be evaluated periodically by a professional such as us PERFECTOREMODEL CORP, so you’ll be safe and comfortable for the status of your house.",
      "Protecting your retaining walls through regular inspections is a great way to protect your entire property, by ensuring the stability and structural soundness of the walls which prevent soil collapse and potential injury.",

      "Call us at (516)828-1324 or (631)629-4242 to get started on making your kitchen dream a reality.",
      "PERFECTOREMODEL CORP guaranteed jobs done",
    ],
    image: "/img/blog18.jpg",
  },
];

export default function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Calculate visible page numbers
  const getVisiblePageNumbers = () => {
    const delta = 2; // Number of pages to show before and after current page
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Home Improvement</h1>

      {currentPosts.map((post) => (
        <Card key={post.id} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{post.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {post.date} | {post.author}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {post.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-4">
            <div className="relative w-full h-64 md:h-80 mt-4 rounded-md overflow-hidden">
              <Image src={post.image || "/blog.svg"} alt={`Image for ${post.title}`} fill className="object-cover" />
            </div>
          </CardFooter>
        </Card>
      ))}

      {/* Pagination */}
      <section className="flex items-center justify-center mt-8">
        <article className="inline-flex items-center rounded-md overflow-hidden border bg-background">
          <Button variant="ghost" size="sm" className="h-9 rounded-none border-r px-3" onClick={prevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <section className="flex items-center">
            {getVisiblePageNumbers().map((number, index) =>
              number === "..." ? (
                <span key={`ellipsis-${index}`} className="h-9 w-9 flex items-center justify-center">
                  {number}
                </span>
              ) : (
                <Button
                  key={`page-${number}`}
                  variant="ghost"
                  size="sm"
                  className={cn("h-9 w-9 rounded-none", currentPage === number && "bg-primary text-primary-foreground")}
                  onClick={() => typeof number === "number" && paginate(number)}
                >
                  {number}
                </Button>
              )
            )}
          </section>

          <Button variant="ghost" size="sm" className="h-9 rounded-none border-l px-3" onClick={nextPage} disabled={currentPage === totalPages}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </article>
      </section>
    </section>
  );
}
