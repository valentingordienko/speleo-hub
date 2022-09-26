import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DownloadSolid.svg';

export function DownloadSolid(props: TProps) {
  return (
    <Icon {...props} name="DownloadSolid">
      <SVG />
    </Icon>
  );
}
