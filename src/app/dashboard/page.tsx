import Button from "@/components/UI/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  return <Button>Hello</Button>;
};

export default page;
