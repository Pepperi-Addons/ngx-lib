import { DataViewScreenSize } from "@pepperi-addons/papi-sdk";

// type ProfileDataViewsType = 'slug-mapping' | 'menu';
export interface IPepProfile {
    id: string;
    name: string;
}

export interface IPepDataViewClickEvent {
    dataViewId: string;
}

export interface IPepProfileDataViewClickEvent {
    profileId: string;
    dataViewId: string;
}

export interface IPepProfileDataViewSaveClickEvent {
    profileId: string;
    copyFromProfileId: string;
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