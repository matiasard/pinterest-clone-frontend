// export interface Photo {
//     id:                       string;
//     created_at:               Date;
//     updated_at:               Date;
//     width:                    number;
//     height:                   number;
//     color:                    string;
//     blur_hash:                string;
//     likes:                    number;
//     liked_by_user:            boolean;
//     alt_description:          string;
//     description:              string;
//     user:                     User;
//     current_user_collections: CurrentUserCollection[];
// }
export interface Photo {
    alt_description:          string;
    blur_hash:                string;
    breadcrumbs:              [];
    color:                    string;
    created_at:               Date;
    current_user_collections: CurrentUserCollection[];
    description:              string | null;
    height:                   number;
    id:                       string;
    likes:                    number;
    links:                    Links;
    promoted_at:              Date;
    slug:                     string;
    sponsorship:              string;
    tags:                     Tags[];
    topic_submissions:        string;
    updated_at:               Date;
    urls:                     Urls;
    user:                     User;
    width:                    number;
}

export interface CurrentUserCollection {
    id:                number;
    title:             string;
    published_at:      Date;
    last_collected_at: Date;
    updated_at:        Date;
    cover_photo:       null;
    user:              null;
}

// export interface User {
//     id:                 string;
//     username:           string;
//     name:               string;
//     portfolio_url:      string;
//     bio:                string;
//     location:           string;
//     total_likes:        number;
//     total_photos:       number;
//     total_collections:  number;
//     instagram_username: string;
//     twitter_username:   string;
//     profile_image:      ProfileImage;
//     links:              [];
// }
export interface User {
    accepted_tos:       boolean;
    bio:                string;
    first_name:         string;
    for_hire:           boolean;
    id:                 string;
    instagram_username: string;
    last_name:          string;
    links:              [];
    location:           string;
    name:               string;
    portfolio_url:      string;
    profile_image:      ProfileImage;
    social:             Social;
    total_collections:  number;
    total_likes:        number;
    total_photos:       number;
    twitter_username:   string;
    updated_at:         Date;
    username:           string;
}

export interface Links {
    download:           string;
    download_location:  string;
    html:               string;
    self:               string;
}

export interface ProfileImage {
    large:  string;
    medium: string;
    small:  string;
}

export interface Social {
    tinstagram_usernameype:  string;
    paypal_email: string;
    portfolio_url: string;
    twitter_username: string;
}
export interface Tags {
    type:  string;
    title: string;
}

export interface Urls {
    full:     string;
    raw:      string;
    regular:  string;
    small:    string;
    small_s3: string;
    thumb:    string;
}

export interface PhotoSave {
    id:                 number;
    idImage:            string;
    description:        string | null;
    alt_description:    string | null;
    download:           string;
    url:                string;
    userName:           string;
    user_profile_image: string | null;
    userId:             number;
}