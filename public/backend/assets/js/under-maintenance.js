
function updateTimer() {
    future = Date.parse("Dec 19, 2023 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div class="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-6 col-span-6"><div class="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md"><p class="mb-1 text-[0.75rem] opacity-[0.5]">DAYS</p><h4 class="font-semibold mb-0 text-[1.5rem]">' + d + '</h4></div></div>' +
        '<div class="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-6 col-span-6"><div class="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md"><p class="mb-1 text-[0.75rem] opacity-[0.5]">HOURS</p><h4 class="font-semibold mb-0 text-[1.5rem]">' + h + '</h4></div></div>' +
        '<div class="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-6 col-span-6"><div class="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md"><p class="mb-1 text-[0.75rem] opacity-[0.5]">MINUTES</p><h4 class="font-semibold mb-0 text-[1.5rem]">' + m + '</h4></div></div>' +
        '<div class="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-6 col-span-6"><div class="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md"><p class="mb-1 text-[0.75rem] opacity-[0.5]">SECONDS</p><h4 class="font-semibold mb-0 text-[1.5rem]">' + s + '</h4></div></div>'
}
setInterval('updateTimer()', 1000);