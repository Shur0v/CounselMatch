
import React from 'react';

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TrustSignal {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export interface Counselor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  verified: boolean;
}

export interface QualityMetric {
  label: string;
  value: string;
  color: string;
}
