import { useEffect, useRef, useState } from "react";
import { FirstStep } from "./components/first-step";
import { SecondStep } from "./components/second-step";
import { SRegister } from "./styles";
import { FullLoading } from "../../../components/full-loading";

export const Register = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const loadingState = useState(true);
  const unconfirmedEmailState = useState("");
  const [unconfirmedEmail] = unconfirmedEmailState;

  useEffect(() => {
    loadingState[1](false);
  }, []);

  return (
    <>
      <SRegister>
        {loadingState[0] && <FullLoading />}

        <div className="steps-container">
          <div ref={carouselRef} className="steps-carousel">
            <FirstStep
              unconfirmedEmailState={unconfirmedEmailState}
              loadingState={loadingState}
              carousel={carouselRef.current}
            />
            <SecondStep loadingState={loadingState} email={unconfirmedEmail} />
          </div>
        </div>
      </SRegister>
    </>
  );
};
