@extends('layouts.master')
@section('title')
    Users | Index
@endsection
@section('content')
    <div class="xl:col-span-6 col-span-12 mt-4">
        <div class="box custom-box">
            <div class="box-header flex justify-between">
                <div class="box-title">
                    Users Tables
                </div>
                <div>
                    <a href="{{ route('users.create') }}" type="button"
                        class="ti-btn !py-1 !px-2 ti-btn-primary !font-medium !text-[0.75rem]">Add User
                        <i class="ri-user-add-line ms-2 inline-block align-middle"></i></a>
                </div>
            </div>
            @if ($users->count())
                <div class="box-body">
                    <div class="table-responsive">
                        <table class="table whitespace-nowrap table-bordered min-w-full">
                            <thead>
                                <tr class="border-b border-defaultborder">
                                    <th scope="col" class="text-start">User</th>
                                    <th scope="col" class="text-start">Status</th>
                                    <th scope="col" class="text-start">Email</th>
                                    <th scope="col" class="text-start">Action</th>
                                </tr>
                            </thead>
                            @foreach ($users as $user)
                                <tbody>
                                    <tr class="border-b border-defaultborder">
                                        <th scope="row">
                                            <div class="flex items-center">
                                                <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                    <img src="{{ ('backend/assets/images/faces/13.jpg') }}" alt="img">
                                                </span>{{ $user->name }}
                                            </div>
                                        </th>
                                        @if ($user->status == 'active')
                                            <td><span class="badge bg-success/10 text-success">Active</span></td>
                                        @else
                                            <td><span class="badge bg-danger/10 text-danger">Inactive</span></td>
                                        @endif
                                        <td>{{ $user->email }}</td>
                                        <td>
                                            <div class="hstack gap-2 flex-wrap">
                                                <a aria-label="anchor" href="{{ route('users.edit', $user->id) }}"
                                                    class="text-info text-[.875rem] leading-none"><i class="ri-edit-line"></i>
                                                </a>
                                                <form action="{{ route('users.destroy', $user->id) }}" method="POST"
                                                    class="inline-block">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" aria-label="anchor" href="javascript:void(0);"
                                                        class="text-danger text-[.875rem] leading-none"><i
                                                            class="ri-delete-bin-5-line"></i></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            @endforeach
                        </table>
                    </div>
                </div>
            @else
                <p class="text-gray-500">No users found.</p>
            @endif
        </div>
    </div>
@endsection
