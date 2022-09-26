import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DownloadOutline.svg';

export function DownloadOutline(props: TProps) {
  return (
    <Icon {...props} name="DownloadOutline">
      <SVG />
    </Icon>
  );
}
