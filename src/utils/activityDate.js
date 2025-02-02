export default function activityDate({ timeStamp }) {
    const postTimeDiffInHour = (new Date() - new Date(timeStamp)) / 3600000;

    if (postTimeDiffInHour < 1) {   // under 1 hour
        return Math.floor(postTimeDiffInHour * 60) < 1
            ? 'Just now'
            : Math.floor(postTimeDiffInHour * 60) === 1
                ? '1 minute ago'
                : `${Math.floor(postTimeDiffInHour * 60)} minutes ago`;
    }
    else if (postTimeDiffInHour > 1 && postTimeDiffInHour < 24) { // under 24 hours.. 1 hour, 2 hours, ...23 hours
        return (Math.floor(postTimeDiffInHour) / 60) < 2
            ? '1 hour ago'
            : `${Math.floor(postTimeDiffInHour / 60)} hours ago`;
    }

    else if (postTimeDiffInHour > 24 && postTimeDiffInHour < 168) { // days.. 1 day, 2 days, 6 days
        return Math.floor(postTimeDiffInHour / 24) < 2
            ? '1 day ago'
            : `${Math.floor(postTimeDiffInHour / 24)} days ago`;
    }
    else if (postTimeDiffInHour > 168 && postTimeDiffInHour < 720) { // 1 week, 2 weeks, 4 weeks
        return Math.floor(postTimeDiffInHour / 168) < 2
            ? '1  week ago'
            : `${Math.floor(postTimeDiffInHour / 168)} weeks ago`;
    }
    else if (postTimeDiffInHour > 720 && postTimeDiffInHour < 8760) {   // 1 month, 2 months, 11 months
        return Math.floor(postTimeDiffInHour / 720) < 2
            ? '1 month ago'
            : `${Math.floor(postTimeDiffInHour / 720)} months ago`;
    }
    else if (postTimeDiffInHour > 8760) {       // 1 year, 2 years.....
        return Math.floor(postTimeDiffInHour / 8760) < 2
            ? '1 year ago'
            : `${Math.floor(postTimeDiffInHour / 8760)} years ago`;
    }
}