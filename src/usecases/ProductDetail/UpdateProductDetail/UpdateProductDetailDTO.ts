

export interface IUpdateProductDetailRequest  {
  processor?: string;
  screen?: string;
  operating_system?: string;
  ram?: string;
  ssd?: string;
  ports?: string;
  graphic?: string;
  warranty?: string;
  back_camera?: string;
  front_camera?: string;
  battery?: string;
  frequency_response?: string;
  microphone?: boolean;
  wireless?: boolean;
  wireless_standby_time?: boolean;
  connectionType?: string;
  connectors?: string;
  bluetooth?: boolean;
  noise_cancelling?: boolean;
  sound_isolating?: boolean;
}


export interface IUpdateProductDetail {
  id: string;
  processor: string | null;
  screen: string | null;
  operating_system: string | null;
  ram: string | null;
  ssd: string | null;
  ports: string | null;
  graphic: string | null;
  warranty: string | null;
  back_camera: string | null;
  front_camera: string | null;
  battery: string | null;
  frequency_response: string | null;
  microphone: boolean | null;
  wireless: boolean | null;
  wireless_standby_time: boolean | null;
  connectionType: string | null;
  connectors: string | null;
  bluetooth: boolean | null;
  noise_cancelling: boolean | null;
  sound_isolating: boolean | null;
  id_product: string;
  created_at: Date;
}
