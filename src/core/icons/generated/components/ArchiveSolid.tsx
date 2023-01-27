import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArchiveSolid.svg';

export function ArchiveSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArchiveSolid">
      <SVG />
    </Icon>
  );
}
