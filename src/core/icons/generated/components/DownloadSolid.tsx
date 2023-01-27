import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DownloadSolid.svg';

export function DownloadSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DownloadSolid">
      <SVG />
    </Icon>
  );
}
