import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArchiveOutline.svg';

export function ArchiveOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArchiveOutline">
      <SVG />
    </Icon>
  );
}
