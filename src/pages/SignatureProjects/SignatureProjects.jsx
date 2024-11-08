import React from "react";
import IntroductionOfSignatureProjects from "../../components/SignatureProjects/IntroductionOfSignatureProjects/IntroductionOfSignatureProjects";
import Holdings from "../../components/SignatureProjects/Holdings/Holdings";

function SignatureProjectsPage() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen  ">
        <div className="col-span-1 flex flex-col p-10 justify-center items-start mt-10">
          <IntroductionOfSignatureProjects />
        </div>
        <div className="col-span-1 my-3 flex flex-col justify-center md:p-24 p-10  items-start bg-lightGray">
          <Holdings />
        </div>
      </div>
    </>
  );
}

export default SignatureProjectsPage;
