Sample_guides: Planets
Filter data by Planetary order from sun less than 6 using the "$lt" operator
{orderFromSun: {$lt: 6} }

sample_resaturants: restaurants
Filter data by burrough and cuisine type using operator "$and"
{ borough: "Brooklyn", cuisine: "Mexican" }

sample_training: posts 
Filter data by using the "$nor" operator - List all titles that are not equal the "Gettysburg Address" or the"US Constitution"
{ $nor: [{ title: "Gettysburg Address" }, { title: "US Constitution" }] }

sample_geospatial: shipwrecks
Filter data by using the "$eq" operator - List all depth that are equal to "2.5"
{ depth: { $eq: 2.5 } }

Sample_airbnb: listingsAndReviews
Filter data by using the "$nin" operator - List all property types that are "apartment" only
{ property_type: { $nin: ["House", "Condominium", "apartHotel"] } }

Sample_airbnb: listingsAndReviews
Filter data by beds greater than 4 using the "$gt" operator
{ accommodates: { $gt: 4 } }

Sample_airbnb: apartHotel
Filter data by Houses or apartHotel using the "$in" operator
{ property_type: { $in: ["House", "apartHotel"] } }

sample_resaturants: neigborhoods
Filter data by burroughs using the "$or" operator
{ $or: [{ borough: "Brooklyn" }, { borough: "Queens" }] }

sample_geospatial: shipwrecks
Filter data by using the "$ne" operator - List all water levels that are not equal to "always under water/submerged"
{ watlev: { $ne: "always under water/submerged" } }

sample_resaturants: neigborhoods
Filter data by using the "$not" operator - List all resaturants that are not in Bronx
{ borough: { $not: /Bronx/ } }