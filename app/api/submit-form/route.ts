import { NextRequest, NextResponse } from "next/server";
import {
  getSupabase,
  isSupabaseConfigured,
  type FormType,
  type JoinFormData,
  type MailingListData,
} from "@/lib/supabase";

interface RequestBody {
  type: FormType;
  data: JoinFormData | MailingListData;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { type, data } = body;

    if (!isSupabaseConfigured()) {
      console.log(`Form submission (${type}):`, data);
      return NextResponse.json({
        success: true,
        message: "Form received (Supabase not configured)",
      });
    }

    const supabase = getSupabase();

    switch (type) {
      case "join": {
        const joinData = data as JoinFormData;
        const { error } = await supabase.from("join_submissions").insert({
          first_name: joinData.firstName,
          last_name: joinData.lastName,
          email: joinData.email,
          linkedin_url: joinData.linkedinUrl,
          company_name: joinData.companyName,
          company_website: joinData.companyWebsite || null,
          company_location: joinData.companyLocation,
          problem_solving: joinData.problemSolving,
          company_vision: joinData.companyVision,
          traction_progress: joinData.tractionProgress,
          team_info: joinData.teamInfo,
          founding_team_makeup: joinData.foundingTeamMakeup,
          ceo_gender: joinData.ceoGender,
          how_did_you_hear: joinData.howDidYouHear,
          join_newsletter: joinData.joinNewsletter,
          additional_materials: joinData.additionalMaterials || null,
          privacy_acknowledged: joinData.privacyAcknowledged,
        });
        if (error) throw error;
        break;
      }

      case "mailing-list": {
        const mailingData = data as MailingListData;
        const { error } = await supabase.from("mailing_list").insert({
          email: mailingData.email,
        });
        if (error) throw error;
        break;
      }

      default:
        return NextResponse.json(
          { success: false, error: "Invalid form type" },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const supabase = getSupabase();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    switch (type) {
      case "join": {
        const { data, error } = await supabase
          .from("join_submissions")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        return NextResponse.json(data);
      }

      case "mailing-list": {
        const { data, error } = await supabase
          .from("mailing_list")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        return NextResponse.json(data);
      }

      default: {
        const [join, mailing] = await Promise.all([
          supabase
            .from("join_submissions")
            .select("*")
            .order("created_at", { ascending: false }),
          supabase
            .from("mailing_list")
            .select("*")
            .order("created_at", { ascending: false }),
        ]);
        return NextResponse.json({
          join: join.data || [],
          mailingList: mailing.data || [],
        });
      }
    }
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read data" },
      { status: 500 }
    );
  }
}
