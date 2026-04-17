import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, BookOpen, Heart, PenLine } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcfb] text-[#4a4a4a] p-6 md:p-12">
      {/* Header: 순례자 환대 */}
      <header className="max-w-4xl mx-auto mb-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-light text-stone-700">평안하신가요, 순례자님?</h1>
            <p className="text-sm text-stone-400 mt-1">오늘의 여정을 이곳에 기록해보세요.</p>
          </div>
          <Badge variant="outline" className="px-3 py-1 font-light border-stone-200">
            새신자 단계
          </Badge>
        </div>
      </header>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {/* 오늘의 말씀 (Pilgrim Guide Engine 연동 예정) */}
        <Card className="border-none bg-stone-100/50 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2 text-stone-500">
              <BookOpen size={16} /> 오늘의 발자취
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-serif leading-relaxed text-stone-700">
              "주의 말씀은 내 발에 등이요 내 길에 빛이니이다."
            </p>
            <p className="text-xs text-stone-400 mt-4 text-right">시편 119:105</p>
          </CardContent>
        </Card>

        {/* 영적 기상도 (Context Engine 연동 예정) */}
        <Card className="border-none bg-stone-100/50 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2 text-stone-500">
              <Mountain size={16} /> 나의 영적 기상도
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-3">
            {["평안", "흔들림", "안개", "맑음"].map((status) => (
              <Button key={status} variant="outline" className="rounded-full text-xs font-light border-stone-200 hover:bg-white">
                {status}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* 퀵 액션 */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="ghost" className="h-24 flex flex-col gap-2 border border-dashed border-stone-200 hover:bg-stone-50">
            <PenLine size={20} className="text-stone-400" />
            <span className="text-xs">묵상 쓰기</span>
          </Button>
          <Button variant="ghost" className="h-24 flex flex-col gap-2 border border-dashed border-stone-200 hover:bg-stone-50">
            <Heart size={20} className="text-stone-400" />
            <span className="text-xs">중보 요청</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
