"use client"; 

import { useRouter } from "@/navigation";
import BackButton from "@/app/shared/BackButton";
import Container from "@/app/shared/Container";
import ReviewComponent from "@/app/shared/ReviewComponent";
import { reviewsData } from "@/constants/reviewsData";

export default function Review() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-primary px-[20px] py-[100px] md:py-[150px]">
      <Container>
        <div className="px-[20px]">
          <BackButton
            styles="text-secondary/50 hover:text-secondary"
            onClick={handleBack}
          />
          <ReviewComponent reviews={reviewsData} />
        </div>
      </Container>
    </div>
  );
}
