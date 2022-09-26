import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArchiveOutline.svg';

export function ArchiveOutline(props: TProps) {
  return (
    <Icon {...props} name="ArchiveOutline">
      <SVG />
    </Icon>
  );
}
