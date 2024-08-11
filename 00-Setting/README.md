## Windows 10
1. Install winget tool. this command in command prompt or Powershell.
```
Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe
```

2. Install Git with winget command
```
winget install --id Git.Git -e --source winget
```

3. Install Node.js on Windows using fnm
```
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.16.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.1`
```

### PowerShell 인스턴스 시작 시 Load되는 PS profile에 output 인코딩 지정
1. profile 경로 확인
```
PS C:\Users\TFX5470H> $profile
C:\Users\TFX5470H\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

2. profile(Microsoft.PowerShell_profile.ps1)에 아래 스크립트 추가
```
[System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8
```

3. PowerShell 관리자 권한 실행하여 아래 스크립트 실행
```
PS C:\Windows\system32> Set-ExecutionPolicy RemoteSigned

실행 규칙 변경
실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면 about_Execution_Policies 도움말
항목(https://go.microsoft.com/fwlink/?LinkID=135170)에 설명된 보안 위험에 노출될 수 있습니다. 실행 정책을 변경하시겠습니까?
[Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)  [?] 도움말 (기본값은 "N"): y
```

### Command Prompt 인스턴스 시작 시 chcp 65001 실행하게 레지스트리 Autorun 지정
1. 레지스트리 편집기 regedit 실행
2. 컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor 이동
3. Autorun 문자열 값 새로 만들기
4. 값 데이터에 `chcp 65001` 입력

## Linux


## Mac