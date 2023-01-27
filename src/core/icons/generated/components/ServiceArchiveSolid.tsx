import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ServiceArchiveSolid.svg';

export function ServiceArchiveSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ServiceArchiveSolid">
      <SVG />
    </Icon>
  );
}
