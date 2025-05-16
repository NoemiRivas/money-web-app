import { SignedIn, SignedOut, RedirectToSignIn, UserProfile } from "@clerk/clerk-react";

export default function ProfilePage() {
  return (
    <>
      <SignedIn>
        <div className="flex justify-center mt-10">
          <UserProfile />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
