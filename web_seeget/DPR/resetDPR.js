/**
 * Created by wjf55 on 2016/5/25.
 */
function setDPR() {
    //������Ƹ���
    const desWidth = 750;
    //���õ�ǰ���ű���
    var _dpr = (1 / window.devicePixelRatio);
    document.getElementById('viewport').setAttribute("content",
        "width=device-width,initial-scale=" + _dpr + ", maximum-scale=" + _dpr + ", minimum-scale=" + _dpr + ", user-scalable=no");
    var iWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
    //����1rem���
    document.getElementsByTagName('html')[0].style.fontSize = (((100 * iWidth ) / desWidth)) + 'px';
    /*
     (((100 * iWidth ) / desWidth)) * window.devicePixelRatio
     ���Ƚ���ǰ��Ļ��ȷŴ�100��,���ų�����Ƹ���,��ô�͵ó��� 100PX��Ƹ��� �ڵ�ǰ��Ļ�Ƕ���PX��
     �������ǳ�����һ�� ��ǰ��Ļ���ر�.
     ΪʲôҪ�������ر�
     ��Ϊ��Ƹ��ǰ���1:1��Ƶ�
     ���ֻ��ϻ��� 2���������ص����һ���������ص�.
     Ȼ�������Ѿ����������ű�,����Ҫ���Ե�ǰ��Ļ1��������=������������
     �����LESS����
     ֻҪ����  ������/��Ƹ���*100REM����.
     */
    //var $fontsizeCss = [
    //    '.fs_25{font-size:' + (12.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_21{font-size:' + (10.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_33{font-size:' + (16.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_29{font-size:' + (14.5 * window.devicePixelRatio) + 'px;}',
    //    '.fs_7{font-size:' + (7.5 * window.devicePixelRatio) + 'px;}'];
    //for (var i = 7; i <= 24; i++) {
    //    $fontsizeCss.push(".fs" + i + "{font-size:" + (i * window.devicePixelRatio) + "px}");
    //}
    //document.querySelector("#fontsize").innerHTML = $fontsizeCss.join('');
}
setDPR();