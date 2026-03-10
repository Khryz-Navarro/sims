@extends('layouts.master')
@section('title')
    Users | Index
@endsection
@section('content')
    <div class="xl:col-span-6 col-span-12">
        <div class="md:flex block items-center justify-between mb-6 mt-[2rem]  page-header-breadcrumb">
            <div class="my-auto">
                <h5 class="page-title text-[1.3125rem] font-medium text-defaulttextcolor mb-0">Users Table</h5>
                <nav>
                    <ol class="flex items-center whitespace-nowrap min-w-0">
                        <li class="text-[12px]"> <a class="flex items-center  text-primary hover:text-primary"
                                href="{{ route('users.index') }}">
                                Users Table</a> </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="box custom-box">
            <div class="box-header flex justify-between">
                <div class="box-title">
                    Users Table
                </div>
                <a href="{{ route('users.create') }}" class="ti-btn !py-1 !px-2 ti-btn-primary !font-medium !text-[0.75rem]"
                    target="_blank">Add Users
                    <i class="ri-add-circle-line ms-2 inline-block align-middle"></i>
                </a>
            </div>
            @if (session('success'))
                <div class="box-body">
                    <div id="dismiss-alert"
                        class="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-success/10 !border-success border-success/20 alert mb-0"
                        role="alert">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-4 w-4 text-success mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <div class="ms-3">
                                <div class="text-sm text-success font-medium">
                                    {{ session('success') }}
                                </div>
                            </div>
                            <div class="ps-3 ms-auto">
                                <div class="mx-1 my-auto">
                                    <button type="button"
                                        class="inline-flex  rounded-sm text-success focus:outline-none focus:ring-0 focus:ring-offset-0 "
                                        data-hs-remove-element="#dismiss-alert">
                                        <span class="sr-only">Dismiss</span>
                                        <svg class="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @elseif (session('delete'))
                <div class="box-body">
                    <div id="dismiss-alert"
                        class="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-danger/10 !border-danger border-danger/20 alert mb-0"
                        role="alert">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-4 w-4 text-danger mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <div class="ms-3">
                                <div class="text-sm text-danger font-medium">
                                    {{ session('delete') }}
                                </div>
                            </div>
                            <div class="ps-3 ms-auto">
                                <div class="mx-1 my-auto">
                                    <button type="button"
                                        class="inline-flex  rounded-sm text-danger focus:outline-none focus:ring-0 focus:ring-offset-0 "
                                        data-hs-remove-element="#dismiss-alert">
                                        <span class="sr-only">Dismiss</span>
                                        <svg class="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endif

            @if ($users->count())
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table whitespace-nowrap table-bordered min-w-full">
                                <thead>
                                    <tr class="border-b border-defaultborder">
                                        <th scope="col" class="text-start">Name</th>
                                        <th scope="col" class="text-start">Email</th>
                                        <th scope="col" class="text-start">Phone</th>
                                        <th scope="col" class="text-start">Address</th>
                                        <th scope="col" class="text-start">Status</th>
                                        <th scope="col" class="text-start">Role</th>
                                        <th scope="col" class="text-start">Date Registered</th>
                                        <th scope="col" class="text-start">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($users as $user)
                                        <tr class="hover:bg-gray-500 dark:hover:bg-gray-700/50">
                                            <td class="border border-gray-300 px-4 py-2">
                                                <span class="avatar avatar-xs me-2 online avatar-rounded animate-pulse">
                                                    <img src="{{ $user->photo ? asset($user->photo) : asset('backend/assets/images/faces/13.jpg') }}"
                                                        alt="img" class="object-cover h-full w-full">
                                                </span> {{ $user->name }}
                                            </td>
                                            <td class="border border-gray-300 px-4 py-2">{{ $user->email }}</td>
                                            <td class="border border-gray-300 px-4 py-2">{{ $user->phone ?? 'N/A' }}</td>
                                            <td class="border border-gray-300 px-4 py-2">{{ $user->address }}</td>
                                            <td class="border border-gray-300 px-4 py-2">
                                                @if ($user->status == 'active')
                                                    <span class="badge badge-success/10 text-success">Active</span>
                                                @else
                                                    <span class="badge badge-danger/10 text-danger">Inactive</span>
                                                @endif
                                            </td>
                                            <td class="border border-gray-300 px-4 py-2">{{ ucfirst($user->role) }}</td>
                                            <td class="border border-gray-300 px-4 py-2">
                                                {{ $user->created_at->format('d M Y h:i A') }}
                                            </td>
                                            <td class="border border-gray-300 px-4 py-2">

                                                <div class="hstack gap-2 flex-wrap">
                                                    <a href="{{ route('users.edit', $user->id) }}"
                                                        class="text-info text-[.875rem] leading-none border-0 bg-transparent"><i
                                                            class="ri-edit-line"></i></a>

                                                    <button type="submit" aria-label="anchor"
                                                        class="text-danger text-[.875rem] leading-none border-0 bg-transparent"
                                                        data-hs-overlay="#todo-compose"><i class="ri-delete-bin-5-line"></i></button>
                                                </div>
                                                <div>
                                                    <div id="todo-compose"
                                                        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                                                        <div
                                                            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                                            <div
                                                                class="flex flex-col bg-white dark:bg-bodybg border border-defaultborder dark:border-defaultborder/10 shadow-sm rounded-sm pointer-events-auto">
                                                                <div
                                                                    class="flex justify-between items-center py-3 px-4 border-b border-defaultborder dark:border-defaultborder/10">
                                                                    <h6 class="modal-title text-[1rem] font-semibold"
                                                                        id="mail-ComposeLabel">Confirm Deletion</h6>
                                                                    <button type="button"
                                                                        class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                                        data-hs-overlay="#exampleModalScrollable">
                                                                        <span class="sr-only">Close</span>
                                                                        <svg class="flex-shrink-0 size-4"
                                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                            stroke-width="2" stroke-linecap="round"
                                                                            stroke-linejoin="round">
                                                                            <path d="M18 6 6 18" />
                                                                            <path d="m6 6 12 12" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                <div class="p-4 overflow-y-auto">
                                                                    Are you sure you want to delete this user? This action cannot be
                                                                    undone.
                                                                </div>
                                                                <div
                                                                    class="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-defaultborder dark:border-defaultborder/10">
                                                                    <button type="button" class="ti-btn  ti-btn-light"
                                                                        data-hs-overlay="#todo-compose">
                                                                        Close
                                                                    </button>
                                                                    <form action="{{ route('users.destroy', $user->id) }}" method="POST"
                                                                        class="inline-block">
                                                                        @csrf
                                                                        @method('DELETE')
                                                                        <button type="submit"
                                                                            class="ti-btn bg-primary text-white !font-medium">Delete</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            @else
            <p class="text-gray-500">No users found.</p>
        @endif
        <div class="box-footer hidden border-t-0">
        </div>
    </div>
    </div>
@endsection