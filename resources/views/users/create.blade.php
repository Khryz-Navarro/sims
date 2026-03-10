@extends('layouts.master')
@section('title')
    User Management | Create
@endsection
@section('content')
    <div class="grid grid-cols-12 gap-6 text-defaultsize mt-4">
        <div class="xl:col-span-12 col-span-12">
            <div class="box">
                <div class="box-header flex justify-between">
                    <div class="box-title">
                        Input Types
                    </div>
                </div>
                <div class="box-body">
                    <form action="{{ route('users.store') }}" method="POST">
                        @csrf
                        <div class="grid grid-cols-12 sm:gap-6">
                            {{-- Start Input --}}
                            <div class="xl:col-span-4 lf:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label for="input-label" class="form-label !font-normal">Name:</label>
                                <input type="text" class="form-control " id="input" name="name">
                            </div>
                            {{-- End Input --}}

                            {{-- Start Input --}}
                            <div class="xl:col-span-4 lf:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label for="input-label" class="form-label !font-normal">Email:</label>
                                <input type="email" class="form-control " id="input" name="email">
                            </div>
                            {{-- End Input --}}

                            {{-- Start Input --}}
                            <div class="xl:col-span-4 lf:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label for="input-label" class="form-label !font-normal">Password:</label>
                                <input type="password" class="form-control " id="input" name="password">
                            </div>
                            {{-- End Input --}}

                            {{-- Start Input --}}
                            <div class="xl:col-span-4 lf:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label for="input-label" class="form-label !font-normal">Phone:</label>
                                <input type="text" class="form-control " id="input" name="phone">
                            </div>
                            {{-- End Input --}}

                            {{-- Start Input --}}
                            <div class="xl:col-span-4 lf:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label for="input-label" class="form-label !font-normal">Address:</label>
                                <input type="text" class="form-control " id="input" name="address">
                            </div>
                            {{-- End Input --}}

                            {{-- Start Input --}}
                            <div class="xl:col-span-4 lf:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <label for="input-label" class="form-label !font-normal">Role:</label>
                                <select class="ti-form-select rounded-sm !py-2 !px-3" name="role">
                                    <option selected>Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="editor">Editor</option>
                                </select>
                            </div>
                            {{-- End Input --}}
                        </div>
                        <button type="submit" class="form-control ti-btn !text-white !bg-primary mt-4" id="timer-btn">
                            Create User
                        </button>
                    </form>
                </div>
                <div class="box-footer hidden border-t-0">
                </div>
            </div>
        </div>
    </div>
@endsection