# 雞鴨鵝 CDG｜開發測試版

目前版本：0.1.10（Android 版本代碼11），發布日期：2026-10-19。

[下載 Android APK](https://github.com/JaxHao/CDG-Downloads/releases/download/v0.1.10/CDG.apk) ｜ [下載 Windows 免安裝 ZIP](https://github.com/JaxHao/CDG-Downloads/releases/download/v0.1.10/CDG-Windows-0.1.10-portable-data.zip) ｜ [版本說明](https://github.com/JaxHao/CDG-Downloads/releases/tag/v0.1.10)

全遊戲改用圖示驅動戰鬥，調整九章主線平衡、夥伴與敵人技能及演出，整合戰鬥說明與新手獎勵機教學。保留十二名夥伴、八級探索、月挑戰、常駐池60抽保底與上次使用隊伍。

最低版本0.1.10。仍處開發測試階段，完整裝置驗收、正式付款與條款尚未完成。兩平台都需連網，可登入相同的正式帳號。

## Android

支援ARM64／x86_64、Android 7.0以上，安裝包約180.53 MB；套件org.cdg.game，僅網際網路權限。沿用正式簽章，可覆蓋安裝。

CDG.apk 的 SHA-256：

```
5ce0b8e027c79980a24af4f22388d0fef2c2d07999746e1d1d93acd974514b74
```

## Windows x64 免安裝版

ZIP約164.36 MB，解壓後約240.6 MB。完整解壓縮後，執行CDG資料夾最外層的CDG.exe，保留Runtime資料夾的全部內容。

```text
CDG/
├─ CDG.exe
├─ Runtime/      遊戲本體與資源包
├─ Data/         首次啟動後建立的本地資料
├─ 先讀我.txt
└─ SHA256SUMS.txt
```

登入狀態、裝置設定、快取、日誌及交易恢復紀錄集中在CDG.exe旁的Data資料夾。下載包不包含Data或任何帳號資料；遊戲不會回退到AppData保存資料，無法寫入時會顯示提示。

更新前先關閉遊戲，完整覆蓋新版程式檔並**保留Data**；搬移時攜帶整個CDG資料夾。帳號資產與進度保存在伺服器，刪除Data只會移除本地登入／設定／恢復紀錄，請先完成尚未結束的操作。Data包含登入資料，請勿公開分享。

由先前使用AppData的版本切換時，請先完成舊版操作並關閉遊戲，再將新版解壓到新資料夾並重新登入；伺服器帳號進度與資產保留。程式不自動搬移或清除舊AppData。Windows與驅動程式自行管理的系統快取不屬遊戲本地資料。

預設為直立視窗，使用滑鼠操作。空白鍵轉動／結算／劇情繼續，Q／W／E使用夥伴技能，1／2／3選擇敵人，A切換自動戰鬥，左右方向鍵切換夥伴，Esc返回，F1開啟說明；可在遊戲設定調整快捷鍵。

啟動檔與遊戲本體已包含遊戲圖示，未作Windows發行者數位簽章；尚未發布Steam。其他PC環境與完整手動遊玩仍待驗收。

CDG-Windows-0.1.10-portable-data.zip 的 SHA-256：

```
1c5efb25d41ef684427036239f8c0670707325a6578f6e9ad7f83f1009e577af
```
