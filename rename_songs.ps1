$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

# Ensure UTF-8
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$folder = Join-Path $root 'Sa Yar Ga Toe Pwell'
Set-Location $folder

$titles = @(
    'စတော်ဘယ်ရီချစ်သဲချင်',
    'မြေပြန့်သူလေး',
    'မျက်သွယ်',
    'ရေစီကြောင်းလေး',
    'ဖက်ထားမယ်',
    'ပြော',
    'ဝှက်ထားတဲ့ကောင်ကင်',
    'အချစ်အတွက် တစ်ဖန်မွေးဖွားခဲ့ပြီ',
    'အချစ်လို့ခေါ်သလား',
    'လရိပ်',
    'မမ',
    'ကျေးဇူးပါကွယ်',
    'နားလည်ပါ',
    'ငယ်ချစ်ပုံပြင်',
    'ချစ်တာတစ်ခုထဲသိတယ်',
    'မြေနီလမ်း',
    'more that I can say(carzoo)',
    'ခရီများအဆုံးထိလျှောက်',
    'The Old you (Piano Only)',
    'ရိုးရှင်သောဘဝ',
    'မကြာခင်မှာကြင်နာမယ်',
    'မင်းတစ်ယောက်သာ',
    'တိတ်တခိုးအချစ်',
    'အတိုင်းထက်အလွန်',
    'အတောင်ပံပါရင်မင်းဆီကို',
    'ယုံကြည်ရာ',
    'နင်စေရင်',
    'ဆွေးတယ်',
    'နွယ်နီ',
    'သူငယ်ချင်း',
    'မောင့်မျက်ရည်၀ိုင်း'
)

for($i = 0; $i -lt $titles.Count; $i++){
    $num = '{0:d2}' -f ($i + 1)
    $title = $titles[$i]
    $target = "$num - $title.png"

    # If target exists, skip
    if(Test-Path -LiteralPath $target){ continue }

    # Try exact match
    $exact = "$title.png"
    if(Test-Path -LiteralPath $exact){
        Rename-Item -LiteralPath $exact -NewName $target -Force
        continue
    }

    # Try best-effort match by replacing spaces and checking startswith/contains
    $cand = Get-ChildItem -File -Filter '*.png' | Where-Object {
        $_.Name -like "*$title*.png"
    } | Select-Object -First 1

    if($cand){
        Rename-Item -LiteralPath $cand.Name -NewName $target -Force
        continue
    }

    Write-Host "Could not find file for: $title" -ForegroundColor Yellow
}

Get-ChildItem -File | Select-Object -ExpandProperty Name | Sort-Object | Out-String -Width 4096 | Write-Host


