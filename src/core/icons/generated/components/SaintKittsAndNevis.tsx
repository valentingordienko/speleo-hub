import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintKittsAndNevis.svg';

export function SaintKittsAndNevis(props: TBaseProps) {
  return (
    <Icon {...props} name="SaintKittsAndNevis">
      <SVG />
    </Icon>
  );
}
