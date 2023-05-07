import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  export default function ArticlesView() {
    return (
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center mr-20 mt-5 mb-5 ml-20 bg-slate-200 rounded-md "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://assets3.thrillist.com/v1/image/3120067/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Museums mark Earth Day with digital artwork inspired by animals in museum collections
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            
Museums mark Earth Day with digital artwork inspired by animals in museum collections
On Saturday 22nd April 2023, “The Wild Escape” will be unveiled to celebrate Earth Day – an initiative that has been developed through the partnership...
          </Typography>
         
        </CardBody>
      </Card>
    );
  }