import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function BlogView() {
    return (
      <Card className="w-100 ml-20 mr-20 mt-5 mb-5 bg-slate-200 rounded-md">
      <Typography color="blue-gray" className=" text-2xl mt-5 font-mono font-bold text-center">
              James Mulraine Early Modern British Art
            </Typography>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img 
            src="https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?cs=srgb&dl=pexels-pixabay-460736.jpg&fm=jpg" 
            className="w-full h-full object-cover "
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            
            
          </div>
          <Typography className="font-normal opacity-75">
          There are thousands of blogs these days, many of which deal with art or the history of art. It is one of the reasons I probably spend too much time online. But a lot of blogs are really interesting, informative and entertaining. Of course there are many, many artists blogs out there as well. Artists often write about their own work and influences. Although I do read artists blogs, I kept these blogs out the Top Ten below  – for now – as there are just too many to mention. There are also great art business blogs, collectors blogs, blogging blogs and the list goes on. Below I am sharing my TOP TEN (as far as I can think of right now) of art (history) blogs.  I hope that you will find some of them new and interesting. Please do share your favourite art (history) blogs in the comments below! I look forward to reading your suggestions.
          </Typography>
<Typography>
          Over the past three centuries, people have collected objects and specimens and placed them in natural history museums throughout the world. Taken as a whole, this global collection is the physical basis for our understanding of the natural world and our place in it, an unparalleled source of information that is directly relevant to issues as diverse as wildlife conservation, climate change, pandemic preparedness, food security, invasive species, rare minerals, and the bioeconomy (1). Strategic coordination and use of the global collection has the potential to focus future collecting and guide decisions that are relevant to the future of humanity and biodiversity. To begin to map the aggregate holdings of the global collection, we describe here a simple and fast method to assess the contents of any natural history museum, and report results based on our assessment of 73 of the world’s largest natural history museums and herbaria from 28 countries.
Today, more than a thousand natural history museums exist, with the largest ones located in Europe and North America. The world’s natural history collections provide a window into the planet’s past and present, and they are increasingly being used to make actionable predictions relative to climate change, biodiversity loss, and infectious disease. For example, natural history museum data are the fundamental source of primary biodiversity knowledge underlying major policy frameworks. The 2018 Intergovernmental Panel on Climate Change (IPCC) Special Report on Global Warming of 1.5°C used over 385 million species occurrence records, aggregated and tracked by the Global Biodiversity Information Facility (GBIF), from 5432 data providers, mostly natural history museums (2, 3), to show species movement in response to climate change [see supplementary materials (SM) for additional case studies].
Yet despite their enormous potential value to society, the information embedded in the collections housed in these museums is largely inaccessible. Fortunately, advances in digital, isotopic, imaging, and genomic technologies, as well as machine learning and artificial intelligence, are transforming and amplifying how natural history collections can be accessed and used (1). These innovations are substantially broadening the range of possible applications to include human health, cultural revitalization, and environmental monitoring. Increasingly, Indigenous interlocuters are joining these conversations and enriching them.
</Typography>
        </CardBody>
       
      </Card>

      
    );
  }