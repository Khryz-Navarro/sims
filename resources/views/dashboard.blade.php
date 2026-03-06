@extends('layouts.master')
@section('title')
    SIMS | Dashboard
@endsection
@section('content')
    <div class="main-content">

        <!-- Start::page-header -->
        <div class="md:flex block items-center justify-between my-6 page-header-breadcrumb">
            <div>
                <h4 class="mb-0 text-defaulttextcolor font-medium">Hi, welcome back!</h4>
                <p class="-mt-[0.2rem] mb-0 text-textmuted">Sales monitoring dashboard template.</p>
            </div>
            <div class="main-dashboard-header-right">
                <div>
                    <label class="text-[.8125rem] text-textmuted">Customer Ratings</label>
                    <div class="main-star">
                        <i class="bi bi-star-fill  text-warning"></i>
                        <i class="bi bi-star-fill  text-warning"></i>
                        <i class="bi bi-star-fill  text-warning"></i>
                        <i class="bi bi-star-fill  text-warning"></i>
                        <i class="bi bi-star-fill  text-textmuted op-8"></i> <span
                            class="text-defaulttextcolor text-[13px]">(14,873)</span>
                    </div>
                </div>
                <div>
                    <label class="text-[.8125rem] text-textmuted">Online Sales</label>
                    <h5 class="-mt-0.5 mb-0 text-defaulttextcolor font-semibold leading-[1.2]">563,275</h5>
                </div>
                <div>
                    <label class="text-[.8125rem] text-textmuted">Offline Sales</label>
                    <h5 class="-mt-0.5 mb-0 text-defaulttextcolor font-semibold leading-[1.2]">783,675</h5>
                </div>
            </div>
        </div>
        <!-- End::page-header -->

        <!-- row -->
        <div class="grid grid-cols-12 gap-x-6">
            <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <div class="box overflow-hidden sales-box bg-primary-gradient !rounded-sm">
                    <div class="px-4 pt-4 pb-2">
                        <div>
                            <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">TODAY ORDERS</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="flex">
                                <div>
                                    <h4 class="font-bold text-[1.25rem] text-fixed-white">$5,74.12</h4>
                                    <p class="mb-0 text-[.75rem] text-fixed-white opacity-[0.7]">Compared to
                                        last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
                                    <i class="fas fa-arrow-circle-up text-fixed-white"></i>
                                    <span class="text-fixed-white opacity-[0.7]"> +427</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="compositeline" class="!-mb-[2px]"></div>
                </div>
            </div>
            <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <div class="box  overflow-hidden sales-card bg-danger-gradient !rounded-sm">
                    <div class="px-4 pt-4 pb-2">
                        <div>
                            <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">TODAY EARNINGS</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="flex">
                                <div>
                                    <h4 class="text-[1.25rem] font-bold text-fixed-white">$1,230.17</h4>
                                    <p class="mb-0  text-[.75rem] text-fixed-white opacity-[0.7]">Compared to
                                        last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
                                    <i class="fas fa-arrow-circle-down text-fixed-white"></i>
                                    <span class="text-fixed-white opacity-[0.7]"> -23.09%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="compositeline2" class="!-mb-[2px]"></div>
                </div>
            </div>
            <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <div class="box  overflow-hidden sales-card bg-success-gradient !rounded-sm">
                    <div class="px-4 pt-4 pb-2">
                        <div>
                            <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">TOTAL EARNINGS</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="flex">
                                <div>
                                    <h4 class="text-[1.25rem] font-bold text-fixed-white">$7,125.70</h4>
                                    <p class="mb-0 text-[.75rem] text-fixed-white opacity-[0.7]">Compared to
                                        last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
                                    <i class="fas fa-arrow-circle-up text-fixed-white"></i>
                                    <span class="text-fixed-white opacity-[0.7]"> 52.09%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="compositeline3" class="!-mb-[2px]"></div>
                </div>
            </div>
            <div class="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <div class="box  overflow-hidden sales-card bg-warning-gradient !rounded-sm">
                    <div class="px-4 pt-4 pb-2">
                        <div>
                            <h6 class="mb-3 text-[.75rem] font-medium text-fixed-white">PRODUCT SOLD</h6>
                        </div>
                        <div class="pb-0 mt-0">
                            <div class="flex">
                                <div>
                                    <h4 class="text-[1.25rem] font-bold text-fixed-white">$4,820.50</h4>
                                    <p class="mb-0 text-[.75rem] text-fixed-white opacity-[0.7]">Compared to
                                        last week</p>
                                </div>
                                <span class="float-end my-auto ms-auto">
                                    <i class="fas fa-arrow-circle-down text-fixed-white"></i>
                                    <span class="text-fixed-white opacity-[0.7]"> -152.3</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="compositeline4" class="!-mb-[2px]"></div>
                </div>
            </div>
        </div>
        <!-- row closed -->

        <!-- row opened -->
        <div class="grid grid-cols-12 gap-x-6">
            <div class="md:col-span-12 lg:col-span-12 xl:col-span-7 col-span-12">
                <div class="box">
                    <div class="box-header !border-b-0 !pb-0 flex justify-between">
                        <div>
                            <h4 class="box-title mb-2">Order status</h4>
                            <div>
                                <p class="text-[.75rem] text-textmuted font-normal mb-0">Order Status and
                                    Tracking. Track your order from ship date to arrival. To begin, enter your
                                    order number.</p>
                            </div>
                        </div>
                        <div class="hs-dropdown ti-dropdown">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !pt-1 !pb-[0.1rem] !px-2 avatar-rounded border border-light shadow-none !font-[500]"
                                data-bs-toggle="dropdown" aria-expanded="false"><i
                                    class="fe fe-more-horizontal text-[0.8rem]"></i>
                            </a>
                            <ul class="hs-dropdown-menu z-[106] ti-dropdown-menu hidden">
                                <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                                        href="javascript:void(0);">Action</a></li>
                                <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                                        href="javascript:void(0);">Another action</a></li>
                                <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                                        href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="box-body !pb-0">
                        <div class="total-revenue">
                            <div>
                                <h4>120,750</h4>
                                <label><span class="bg-primary"></span>success</label>
                            </div>
                            <div>
                                <h4>56,108</h4>
                                <label><span class="bg-danger"></span>Pending</label>
                            </div>
                            <div>
                                <h4>32,895</h4>
                                <label><span class="bg-warning"></span>Failed</label>
                            </div>
                        </div>
                        <div id="Sales-bar" class="sales-bar"></div>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-12 xl:col-span-5 col-span-12">
                <div class="box p-[20px] card-dashboard-map-one">
                    <h4 class="box-title mb-1">Sales Revenue by Customers in USA</h4>
                    <p class="text-[.75rem] text-textmuted font-normal mb-4">Sales Performance of all states in
                        the United States.</p>
                    <div id="us-map1" class="pt-2"></div>
                </div>
            </div>
        </div>
        <!-- row closed -->

        <!-- row opened -->
        <div class="grid grid-cols-12 gap-x-6">
            <div class="xl:col-span-4 md:col-span-12 lg:col-span-12 col-span-12">
                <div class="box overflow-hidden">
                    <div class="box-header !border-b-0 !pb-1">
                        <h4 class="box-title mb-2">Recent Customers</h4>
                        <p class="text-[.75rem] mb-0 text-textmuted font-normal">A customer is an individual or
                            business that purchases the goods service has evolved to include real-time</p>
                    </div>
                    <div class="box-body !p-0 customers mt-1">
                        <div class="ti-list-group ti-list-group-flush">
                            <div class="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-medium">
                                <div class="flex">
                                    <img class="avatar avatar-md avatar-rounded my-auto me-4"
                                        src="../assets/images/faces/3.jpg" alt="Image description">
                                    <div class="flex-grow">
                                        <div class="flex items-center">
                                            <div class="mt-0">
                                                <h5 class="mb-1 text-[.9375rem] leading-none">Samantha Melon
                                                </h5>
                                                <p class="mb-0 text-[.8125rem] text-textmuted">User ID: #1234
                                                    <span class="text-success ms-2 inline-block">Paid</span>
                                                </p>
                                            </div>
                                            <div class="ms-auto w-[45%] text-[1rem] mt-2">
                                                <div id="spark1" class="w-full rtl:rotate-180"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-medium">
                                <div class="flex">
                                    <img class="avatar avatar-md avatar-rounded my-auto me-4"
                                        src="../assets/images/faces/11.jpg" alt="Image description">
                                    <div class="flex-grow">
                                        <div class="flex items-center">
                                            <div class="mt-1">
                                                <h5 class="mb-1 text-[.9375rem] leading-none">Jimmy Changa</h5>
                                                <p class="mb-0 text-[.8125rem] text-textmuted">User ID: #1234
                                                    <span class="text-danger ms-2 inline-block">Pending</span>
                                                </p>
                                            </div>
                                            <div class="ms-auto w-[45%] text-[1rem] mt-2">
                                                <div id="spark2" class="w-full rtl:rotate-180"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-medium">
                                <div class="flex">
                                    <img class="avatar avatar-md avatar-rounded my-auto me-4"
                                        src="../assets/images/faces/17.jpg" alt="Image description">
                                    <div class="flex-grow">
                                        <div class="flex items-center">
                                            <div class="mt-1">
                                                <h5 class="mb-1 text-[.9375rem] leading-none">Gabe Lackmen</h5>
                                                <p class="mb-0 text-[.8125rem] text-textmuted">User ID: #1234
                                                    <span class="text-danger ms-2 inline-block">Pending</span>
                                                </p>
                                            </div>
                                            <div class="ms-auto w-[45%] text-[1rem] mt-2">
                                                <div id="spark3" class="w-full rtl:rotate-180"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-medium">
                                <div class="flex">
                                    <img class="avatar avatar-md avatar-rounded my-auto me-4"
                                        src="../assets/images/faces/15.jpg" alt="Image description">
                                    <div class="flex-grow">
                                        <div class="flex items-center">
                                            <div class="mt-1">
                                                <h5 class="mb-1 text-[.9375rem] leading-none">Manuel Labor</h5>
                                                <p class="mb-0 text-[.8125rem] text-textmuted">User ID: #1234
                                                    <span class="text-success ms-2 inline-block">Paid</span>
                                                </p>
                                            </div>
                                            <div class="ms-auto w-[45%] text-[1rem] mt-2">
                                                <div id="spark4" class="w-full rtl:rotate-180"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-medium">
                                <div class="flex">
                                    <img class="avatar avatar-md avatar-rounded my-auto me-4"
                                        src="../assets/images/faces/6.jpg" alt="Image description">
                                    <div class="flex-grow">
                                        <div class="flex items-center">
                                            <div class="mt-1">
                                                <h5 class="mb-1 text-[.9375rem] leading-none">Sharon Needles
                                                </h5>
                                                <p class="b-0 text-[.8125rem] text-textmuted mb-0">User ID:
                                                    #1234 <span class="text-success ms-2 inline-block">Paid</span></p>
                                            </div>
                                            <div class="ms-auto w-[45%] text-[1rem] mt-2">
                                                <div id="spark5" class="w-full rtl:rotate-180"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xl:col-span-4 md:col-span-12 lg:col-span-6 col-span-12">
                <div class="box">
                    <div class="box-header !border-b-0 !pb-0">
                        <h3 class="box-title mb-2">Sales Activity</h3>
                        <p class="text-[.75rem] mb-0 text-textmuted font-normal">Sales activities are the
                            tactics that salespeople use to achieve their goals and objective</p>
                    </div>
                    <div class="product-timeline box-body !pt-3">
                        <ul class="timeline-1 mb-0">
                            <li class="!mt-0"> <i
                                    class="fe fe-pie-chart bg-primary-gradient text-fixed-white product-icon"></i>
                                <span class="font-medium mb-4 text-[.875rem]">Total Products</span> <a
                                    href="javascript:void(0);" class="float-end text-[.6875rem] text-textmuted">3 days
                                    ago</a>
                                <p class="mb-0 text-textmuted text-[.75rem]">1.3k New Products</p>
                            </li>
                            <li class="!mt-0"> <i
                                    class="fe fe-shopping-cart bg-danger-gradient text-fixed-white product-icon"></i>
                                <span class="font-medium mb-4 text-[.875rem]">Total Sales</span> <a
                                    href="javascript:void(0);" class="float-end text-[.6875rem] text-textmuted">35 mins
                                    ago</a>
                                <p class="mb-0 text-textmuted text-[.75rem]">1k New Sales</p>
                            </li>
                            <li class="!mt-0"> <i
                                    class="fe fe-bar-chart bg-success-gradient text-fixed-white product-icon"></i>
                                <span class="font-medium mb-4 text-[.875rem]">Total Revenue</span> <a
                                    href="javascript:void(0);" class="float-end text-[.6875rem] text-textmuted">50 mins
                                    ago</a>
                                <p class="mb-0 text-textmuted text-[.75rem]">23.5K New Revenue</p>
                            </li>
                            <li class="!mt-0"> <i class="fe fe-box bg-warning-gradient text-fixed-white product-icon"></i>
                                <span class="font-medium mb-4 text-[.875rem]">Total Profit</span> <a
                                    href="javascript:void(0);" class="float-end text-[.6875rem] text-textmuted">1 hour
                                    ago</a>
                                <p class="mb-0 text-textmuted text-[.75rem]">3k New profit</p>
                            </li>
                            <li class="!mt-0"> <i class="fe fe-eye bg-purple-gradient text-fixed-white product-icon"></i>
                                <span class="font-medium mb-4 text-[.875rem]">Customer Visits</span> <a
                                    href="javascript:void(0);" class="float-end text-[.6875rem] text-textmuted">1 day
                                    ago</a>
                                <p class="mb-0 text-textmuted text-[.75rem]">15% increased</p>
                            </li>
                            <li class="!mt-0 !mb-0"> <i
                                    class="fe fe-edit bg-primary-gradient text-fixed-white product-icon"></i>
                                <span class="font-medium mb-4 text-[.875rem]">Customer Reviews</span> <a
                                    href="javascript:void(0);" class="float-end text-[.6875rem] text-textmuted">1 day
                                    ago</a>
                                <p class="mb-0 text-textmuted text-[.75rem]">1.5k reviews</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="xl:col-span-4 md:col-span-12 lg:col-span-6 col-span-12">
                <div class="box">
                    <div class="box-header !border-b-0 !pb-0">
                        <h4 class="box-title mb-2">Recent Orders</h4>
                        <p class="text-[.75rem] mb-0 text-textmuted font-normal">An order is an investor's
                            instructions to a broker or brokerage firm to purchase or sell</p>
                    </div>
                    <div class="box-body sales-info !pb-0 !pt-0 !mt-0">
                        <div id="chart" class="h-[150px]"></div>
                        <div class="grid grid-cols-12 gap-x-6 sales-infomation pb-0 mb-0 mx-auto w-full">
                            <div class="md:col-span-6 col-span-12 px-2">
                                <p class="mb-0 flex"><span class="legend bg-primary !rounded-[0.13]"></span>Delivered</p>
                                <h3 class="mb-1 leading-none">5238</h3>
                                <div class="flex">
                                    <p class="text-textmuted mb-3">Last 6 months</p>
                                </div>
                            </div>
                            <div class="md:col-span-6 col-span-12 px-2">
                                <p class="mb-0 flex"><span class="legend bg-info !rounded-[0.13]"></span>Cancelled</p>
                                <h3 class="mb-1 leading-none">3467</h3>
                                <div class="flex">
                                    <p class="text-textmuted mb-3">Last 6 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box ">
                    <div class="box-body">
                        <div class="grid grid-cols-12 gap-x-0 sm:gap-x-6">
                            <div class="md:col-span-6 col-span-12">
                                <div class="flex items-center pb-0">
                                    <p class="mb-0 text-[.875rem] leading-none">Total Sales</p>
                                </div>
                                <h4 class="font-bold mb-2 text-[1.5rem] !pt-2">$7,590</h4>
                                <div class="progress progress-style progress-sm">
                                    <div class="progress-bar bar-1 bg-primary-gradient" style="width: 80%"
                                        role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="78"></div>
                                </div>
                            </div>
                            <div class="md:col-span-6 col-span-12 mt-4 md:mt-0">
                                <div class="flex items-center pb-0">
                                    <p class="mb-0 text-[.875rem] leading-none">Active Users</p>
                                </div>
                                <h4 class="font-bold mb-2 text-[1.5rem] !pt-2">$5,460</h4>
                                <div class="progress progress-style progress-sm">
                                    <div class="progress-bar bar-2  bg-danger-gradient" style="width: 45%"
                                        role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- row close -->

        <!-- row opened -->
        <div class="grid grid-cols-12 gap-x-6">
            <div class="md:col-span-12 lg:col-span-4 xl:col-span-4 col-span-12">
                <div class="box top-countries-card">
                    <div class="box-header !border-b-0 !p-0">
                        <h4 class="box-title !mb-1">Your Top Countries</h4><span
                            class="d-block text-textmuted font-normal text-[0.75rem] !mb-2">Sales performance
                            revenue based by country</span>
                    </div>
                    <div class="ti-list-group border mt-2">
                        <div class="ti-list-group-item leading-[1.1] !border-t-0 !px-0" id="br-t-0">
                            <p>United States</p><span>$1,671.10</span>
                        </div>
                        <div class="ti-list-group-item leading-[1.1] !border-t-0 !px-0">
                            <p>Netherlands</p><span>$1,064.75</span>
                        </div>
                        <div class="ti-list-group-item leading-[1.1] !border-t-0 !px-0">
                            <p>United Kingdom</p><span>$1,055.98</span>
                        </div>
                        <div class="ti-list-group-item  leading-[1.1] !border-t-0 !px-0">
                            <p>Canada</p><span>$1,045.49</span>
                        </div>
                        <div class="ti-list-group-item leading-[1.1] !border-t-0 !px-0">
                            <p>India</p><span>$1,930.12</span>
                        </div>
                        <div class="ti-list-group-item leading-[1.1] !border-b-0 !border-t-0 !px-0 !mb-0">
                            <p>Australia</p><span>$1,042.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-12 lg:col-span-8 xl:col-span-8 col-span-12">
                <div class="box !p-[20px]">
                    <div class=" box-header !border-b-0 !p-0 flex justify-between">
                        <h4 class="box-title mb-2">Your Most Recent Earnings</h4>
                        <div class="hs-dropdown ti-dropdown">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 avatar-rounded border border-light shadow-none !font-[500]"
                                data-bs-toggle="dropdown" aria-expanded="false"><i
                                    class="fe fe-more-horizontal text-[0.8rem]"></i>
                            </a>
                            <ul class="hs-dropdown-menu ti-dropdown-menu hidden">
                                <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                                        href="javascript:void(0);">Action</a></li>
                                <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                                        href="javascript:void(0);">Another action</a></li>
                                <li><a class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-[500] block"
                                        href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <span class="text-[0.75rem] text-textmuted mb-3 ">This is your most recent earnings for
                        today's date.</span>
                    <div class="table-responsive country-table">
                        <table
                            class="table table-auto ti-custom-table table-striped table-bordered mb-0 text-nowrap w-full !border-defaultborder dark:!border-defaultborder/10">
                            <thead>
                                <tr>
                                    <th class="wd-lg-25p text-start !text-xs">Date</th>
                                    <th class="wd-lg-25p text-start !text-xs">Sales Count</th>
                                    <th class="wd-lg-25p text-start !text-xs">Earnings</th>
                                    <th class="wd-lg-25p text-start !text-xs">Tax Witheld</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="!font-normal">05 Jan 2024</td>
                                    <td class="font-medium">34</td>
                                    <td class="font-medium">$658.20</td>
                                    <td class="text-danger font-medium">-$45.10</td>
                                </tr>
                                <tr>
                                    <td class="!font-normal">06 Feb 2024</td>
                                    <td class="font-medium">26</td>
                                    <td class="font-medium">$453.25</td>
                                    <td class="text-danger font-medium">-$15.02</td>
                                </tr>
                                <tr>
                                    <td class="!font-normal">07 Mar 2024</td>
                                    <td class="font-medium">34</td>
                                    <td class="font-medium">$653.12</td>
                                    <td class="text-danger font-medium">-$13.45</td>
                                </tr>
                                <tr>
                                    <td class="!font-normal">08 Apr 2024</td>
                                    <td class="font-medium">45</td>
                                    <td class="font-medium">$546.47</td>
                                    <td class="text-danger font-medium">-$24.22</td>
                                </tr>
                                <tr>
                                    <td class="!font-normal">09 May 2024</td>
                                    <td class="font-medium">31</td>
                                    <td class="font-medium">$425.72</td>
                                    <td class="text-danger font-medium">-$25.01</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
@endsection