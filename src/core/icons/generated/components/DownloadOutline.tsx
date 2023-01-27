import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DownloadOutline.svg';

export function DownloadOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DownloadOutline">
      <SVG />
    </Icon>
  );
}
