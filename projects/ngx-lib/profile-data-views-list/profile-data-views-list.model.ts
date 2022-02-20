import { DataViewScreenSize } from "@pepperi-addons/papi-sdk";

// type ProfileDataViewsType = 'slug-mapping' | 'menu';
export interface IPepProfile {
    id: string;
    name: string;
}

export interface IPepProfileDataViewClickEvent {
    dataViewId: string;
}

export interface IPepProfileDataView {
    dataViewId: string;
    fields?: string[];
    viewType?: DataViewScreenSize
}

export interface IPepProfileDataViewsCard {
    profileId: string;
    title: string;
    dataViews: IPepProfileDataView[];
}