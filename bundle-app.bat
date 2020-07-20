@PATH=%PYTHON2_HOME%\Scripts\;%PYTHON_HOME%\;%PATH%
@rem @cmd /K

@mkdir android\app\src\main\assets
@cmd /C yarn bundle-android

cd android

@echo Gradle clean...
@cmd /C .\gradlew.bat clean

@echo Gradle assembleDebug...
@cmd /C .\gradlew.bat assembleDebug


@rem .\gradlew.bat assembleRelease

@pause
