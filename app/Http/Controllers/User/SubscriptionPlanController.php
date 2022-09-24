<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\UserSubscription;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlan = SubscriptionPlan::all();
        // return $subscriptionPlan;

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => $subscriptionPlan
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan )
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
