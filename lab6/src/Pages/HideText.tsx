import React, {useState} from "react";
import {Card} from "../Components/Card/Card.tsx";
import {Button} from "../Components/Button/Button.tsx";

export const HideText: React.FC = () => {
    const [isShow, setIsShow] = useState<boolean>(true);

    return (
        <div>
            <Card
                header={"Text"}
            >
                <div style={{display: isShow ? 'block' : 'none'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non magna libero. Ut elementum
                    egestas libero eu ultrices. Etiam eget mauris iaculis, interdum urna sit amet, commodo diam. Nunc
                    volutpat, metus sed malesuada tincidunt, risus augue vulputate ante, a dictum tortor turpis
                    pellentesque diam. Fusce sed libero feugiat, tempus lacus ac, rhoncus orci. Fusce rhoncus justo non
                    nisi ultricies laoreet. Morbi ullamcorper ut ex sed aliquam. Nunc suscipit dolor quis elementum
                    tristique. Aenean aliquet varius maximus. Suspendisse bibendum laoreet ipsum quis lacinia. Morbi in
                    tempus ipsum. Praesent condimentum ornare suscipit. Phasellus non nisl urna. Morbi blandit sem id
                    lorem auctor, vel venenatis augue rutrum. Fusce at nibh tempor, feugiat urna eget, imperdiet diam.

                    Sed mollis diam velit, ut fermentum ligula feugiat non. Pellentesque neque urna, pulvinar aliquet
                    turpis vitae, fermentum molestie elit. Vivamus fringilla interdum condimentum. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Suspendisse sit amet lacus eu leo rhoncus consectetur non
                    eget ipsum. Pellentesque sodales ligula at ex tristique, at condimentum urna rhoncus. Aenean et
                    semper eros. Donec auctor ex laoreet, luctus est vel, interdum augue. Duis suscipit massa non porta
                    viverra. Ut pharetra tortor sit amet leo malesuada, vitae egestas sapien viverra. Pellentesque sit
                    amet luctus elit, a efficitur mi. Phasellus lobortis at odio vel scelerisque. Integer elementum ex a
                    dictum euismod. Proin molestie, eros at pulvinar fermentum, velit purus pellentesque sem, vel congue
                    magna est vitae erat.

                    Donec varius fringilla risus, id egestas lorem tristique non. Fusce non massa a eros tincidunt
                    lobortis non ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ex
                    condimentum, euismod lorem eu, luctus metus. Proin eget orci enim. Donec id cursus mauris, ac
                    placerat augue. Aenean pellentesque pulvinar auctor. In hac habitasse platea dictumst.

                    Ut vestibulum quam euismod molestie feugiat. Sed at nisl imperdiet ligula maximus mattis. Ut semper
                    ante ac eleifend molestie. Nullam imperdiet blandit lacus facilisis venenatis. Nam in ante arcu.
                    Donec sed orci ipsum. Phasellus a nibh nunc. Integer massa mauris, elementum nec ligula et, mattis
                    luctus diam. Curabitur vestibulum, urna eget fermentum lacinia, mauris neque aliquet purus, quis
                    malesuada lorem massa vel enim. Morbi tincidunt hendrerit enim ut viverra. Curabitur dictum lacinia
                    nisi, eu rhoncus purus vehicula vitae. Morbi nulla diam, convallis eget odio vitae, viverra
                    facilisis tortor. Donec egestas lectus sit amet justo cursus, suscipit finibus libero pharetra.
                    Suspendisse non laoreet libero. Duis bibendum lorem ante, vitae porta lacus ultrices id.

                    Nam porttitor lacus lectus, vel dictum ipsum imperdiet a. Vivamus tincidunt lorem eget sapien
                    fermentum, in viverra nunc convallis. Curabitur placerat eu erat vitae porta. Sed vitae nisi tellus.
                    Etiam vestibulum, orci eu congue mattis, felis augue ultrices ante, sit amet lobortis enim orci at
                    lorem. Nulla facilisi. Suspendisse sit amet ipsum ullamcorper nibh dictum imperdiet fermentum et
                    tortor. Nullam efficitur ut nulla at feugiat. Suspendisse potenti. Cras aliquet dolor at sem
                    fermentum, sed molestie metus porta. Vivamus hendrerit purus vitae nulla fringilla viverra. Sed
                    aliquam tortor ac faucibus interdum. Nullam ut ante volutpat, fringilla est ac, interdum tortor.
                </div>
                <Button
                    onClick={() => {
                        setIsShow(!isShow);
                    }}
                >
                    {!isShow ? 'Show' : 'Hide'} text
                </Button>
            </Card>
        </div>
    );
}