import { PageHeader } from "antd";
import React from "react";

export function MobileTitleHeader(props: {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    onBack?: ()=>void;
  }) {
  
    return (
      <PageHeader onBack={props.onBack} title={props.title} subTitle={props.subtitle} />
    );
  }